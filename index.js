const readInstalled = require("read-installed");
const parsePackageJsonName = require("parse-packagejson-name");
const pathLib = require("path");
const ssri = require("ssri");
const spdxLicenses = require("./spdx-licenses.json");
const fs = require("fs");
const uuidv4 = require("uuid/v4");
const PackageURL = require("packageurl-js");
const builder = require("xmlbuilder");
const utils = require("./utils");
const { spawnSync } = require('child_process');

/**
 * Performs a lookup + validation of the license specified in the
 * package. If the license is a valid SPDX license ID, set the 'id'
 * of the license object, otherwise, set the 'name' of the license
 * object.
 */
function getLicenses(pkg) {
  let license = pkg.license && (pkg.license.type || pkg.license);
  if (license) {
    if (!Array.isArray(license)) {
      license = [license];
    }
    return license
      .map(l => {
        let licenseContent = {};
        if (
          spdxLicenses.some(v => {
            return l === v;
          })
        ) {
          licenseContent.id = l;
        } else {
          licenseContent.name = l;
        }
        addLicenseText(pkg, l, licenseContent);
        return licenseContent;
      })
      .map(l => ({ license: l }));
  }
  return null;
}

/**
 * Tries to find a file containing the license text based on commonly
 * used naming and content types. If a candidate file is found, add
 * the text to the license text object and stop.
 */
function addLicenseText(pkg, l, licenseContent) {
  let licenseFilenames = [
    "LICENSE",
    "License",
    "license",
    "LICENCE",
    "Licence",
    "licence",
    "NOTICE",
    "Notice",
    "notice"
  ];
  let licenseContentTypes = {
    "text/plain": "",
    "text/txt": ".txt",
    "text/markdown": ".md",
    "text/xml": ".xml"
  };
  /* Loops over different name combinations starting from the license specified
       naming (e.g., 'LICENSE.Apache-2.0') and proceeding towards more generic names. */
  for (const licenseName of [`.${l}`, ""]) {
    for (const licenseFilename of licenseFilenames) {
      for (const [licenseContentType, fileExtension] of Object.entries(
        licenseContentTypes
      )) {
        let licenseFilepath = `${pkg.realPath}/${licenseFilename}${licenseName}${fileExtension}`;
        if (fs.existsSync(licenseFilepath)) {
          licenseContent.text = readLicenseText(
            licenseFilepath,
            licenseContentType
          );
          return;
        }
      }
    }
  }
}

/**
 * Read the file from the given path to the license text object and includes
 * content-type attribute, if not default. Returns the license text object.
 */
function readLicenseText(licenseFilepath, licenseContentType) {
  let licenseText = fs.readFileSync(licenseFilepath, "utf8");
  if (licenseText) {
    let licenseContentText = { "#cdata": licenseText };
    if (licenseContentType !== "text/plain") {
      licenseContentText["@content-type"] = licenseContentType;
    }
    return licenseContentText;
  }
  return null;
}

/**
 * Adds
 * @param pkg
 * @returns {Array}
 */
function addExternalReferences(pkg) {
  let externalReferences = [];
  if (pkg.homepage) {
    externalReferences.push({
      reference: { "@type": "website", url: pkg.homepage }
    });
  }
  if (pkg.bugs && pkg.bugs.url) {
    externalReferences.push({
      reference: { "@type": "issue-tracker", url: pkg.bugs.url }
    });
  }
  if (pkg.repository && pkg.repository.url) {
    externalReferences.push({
      reference: { "@type": "vcs", url: pkg.repository.url }
    });
  }
  return externalReferences;
}

/**
 * For all modules in the specified package, creates a list of
 * component objects from each one.
 */
exports.listComponents = listComponents;
function listComponents(pkg, ptype = "npm") {
  let list = {};
  let isRootPkg = ptype === 'npm';
  if (Array.isArray(pkg)) {
    pkg.forEach(p => {
      addComponent(p, ptype, list, isRootPkg);
    });
  } else {
    addComponent(pkg, ptype, list, isRootPkg);
  }
  return Object.keys(list).map(k => ({ component: list[k] }));
}

/**
 * Given the specified package, create a CycloneDX component and add it to the list.
 */
function addComponent(pkg, ptype, list, isRootPkg = false) {
  //read-installed with default options marks devDependencies as extraneous
  //if a package is marked as extraneous, do not include it as a component
  if (pkg.extraneous) return;
  if (!isRootPkg) {
    let pkgIdentifier = parsePackageJsonName(pkg.name);
    let group = pkg.group || pkgIdentifier.scope;
    let name = pkgIdentifier.fullName || pkg.name;
    let version = pkg.version;
    let licenses = getLicenses(pkg);
    let purl = new PackageURL(
      ptype,
      group,
      name,
      version,
      pkg.qualifiers,
      pkg.subpath
    );
    let purlString = purl.toString();
    let component = {
      "@type": determinePackageType(pkg),
      "@bom-ref": purlString,
      group: group,
      name: name,
      version: version,
      description: { "#cdata": pkg.description },
      hashes: [],
      licenses: licenses,
      purl: purlString,
      externalReferences: addExternalReferences(pkg)
    };

    if (
      component.externalReferences === undefined ||
      component.externalReferences.length === 0
    ) {
      delete component.externalReferences;
    }

    processHashes(pkg, component);

    if (list[component.purl]) return; //remove cycles
    list[component.purl] = component;
  }
  if (pkg.dependencies) {
    Object.keys(pkg.dependencies)
      .map(x => pkg.dependencies[x])
      .filter(x => typeof x !== "string") //remove cycles
      .map(x => addComponent(x, ptype, list));
  }
}

/**
 * If the author has described the module as a 'framework', the take their
 * word for it, otherwise, identify the module as a 'library'.
 */
function determinePackageType(pkg) {
  if (pkg.hasOwnProperty("keywords")) {
    for (let keyword of pkg.keywords) {
      if (keyword.toLowerCase() === "framework") {
        return "framework";
      }
    }
  }
  return "library";
}

/**
 * Uses the SHA1 shasum (if present) otherwise utilizes Subresource Integrity
 * of the package with support for multiple hashing algorithms.
 */
function processHashes(pkg, component) {
  if (pkg._shasum) {
    component.hashes.push({ hash: { "@alg": "SHA-1", "#text": pkg._shasum } });
  } else if (pkg._integrity) {
    let integrity = ssri.parse(pkg._integrity);
    // Components may have multiple hashes with various lengths. Check each one
    // that is supported by the CycloneDX specification.
    if (integrity.hasOwnProperty("sha512")) {
      addComponentHash("SHA-512", integrity.sha512[0].digest, component);
    }
    if (integrity.hasOwnProperty("sha384")) {
      addComponentHash("SHA-384", integrity.sha384[0].digest, component);
    }
    if (integrity.hasOwnProperty("sha256")) {
      addComponentHash("SHA-256", integrity.sha256[0].digest, component);
    }
    if (integrity.hasOwnProperty("sha1")) {
      addComponentHash("SHA-1", integrity.sha1[0].digest, component);
    }
  }
  if (component.hashes.length === 0) {
    delete component.hashes; // If no hashes exist, delete the hashes node (it's optional)
  }
}

/**
 * Adds a hash to component.
 */
function addComponentHash(alg, digest, component) {
  let hash = Buffer.from(digest, "base64").toString("hex");
  component.hashes.push({ hash: { "@alg": alg, "#text": hash } });
}

const buildBomString = (includeBomSerialNumber, pkgInfo, ptype, callback) => {
  let bom = builder
    .create("bom", { encoding: "utf-8", separateArrayItems: true })
    .att("xmlns", "http://cyclonedx.org/schema/bom/1.1");
  if (includeBomSerialNumber) {
    bom.att("serialNumber", "urn:uuid:" + uuidv4());
  }
  bom.att("version", 1);
  const components = listComponents(pkgInfo, ptype);
  bom.ele("components").ele(components);
  let bomString = bom.end({
    pretty: true,
    indent: "  ",
    newline: "\n",
    width: 0,
    allowEmpty: false,
    spacebeforeslash: ""
  });
  callback(null, bomString);
};

/**
 * Function to create bom string
 *
 * @param includeBomSerialNumber Boolean to include BOM serial number
 * @param path to the project
 * @param options Parse options from the cli
 * @param callback Function callback
 */
exports.createBom = (includeBomSerialNumber, path, options, callback) => {
  try {
    fs.accessSync(path, fs.constants.R_OK);
  } catch (err) {
    console.error(path, "is invalid");
    process.exit(1);
  }
  const { projectType } = options;
  // node.js - package.json
  if (projectType === 'nodejs' || fs.existsSync(pathLib.join(path, "package.json"))) {
    readInstalled(path, options, (err, pkgInfo) => {
      buildBomString(includeBomSerialNumber, pkgInfo, "npm", callback);
    });
  }
  // maven - pom.xml
  const pomFiles = utils.getAllFiles(path, (options.multiProject ? "**/" :"") + "pom.xml");
  if (pomFiles && pomFiles.length) {
    for (let i in pomFiles) {
      const f = pomFiles[i];
      const basePath = pathLib.dirname(f);
      console.log("Executing 'mvn org.cyclonedx:cyclonedx-maven-plugin:makeAggregateBom' in", basePath);
      spawnSync("mvn", ["org.cyclonedx:cyclonedx-maven-plugin:makeAggregateBom"], {cwd: basePath});
    }
    const firstPath = pathLib.dirname(pomFiles[0]);
    if (fs.existsSync(pathLib.join(firstPath, "target", "bom.xml"))) {
      const bomString = fs.readFileSync(pathLib.join(firstPath, "target", "bom.xml"));
      callback(null, bomString);
    } else {
      const bomFiles = utils.getAllFiles(path, "bom.xml");
      callback(null, bomFiles);
    }
  }
  // gradle
  const gradleFiles = utils.getAllFiles(path, (options.multiProject ? "**/" :"") + "build.gradle");
  if (gradleFiles && gradleFiles.length) {
    let GRADLE_CMD = "gradle";
    if (fs.existsSync(pathLib.join(path, "gradlew"))) {
      GRADLE_CMD = "gradlew";
    }
    for (let i in gradleFiles) {
      const f = gradleFiles[i];
      const basePath = pathLib.dirname(f);
      console.log("Executing 'gradle dependencies' in", basePath);
      const result = spawnSync(GRADLE_CMD, ["dependencies", "-q", "--configuration", "default", "--console", "plain"], {cwd: basePath});
      const cmdOutput = Buffer.from(result.stdout).toString();
      const pkgList = utils.parseGradleDep(cmdOutput);
      buildBomString(includeBomSerialNumber, pkgList, "maven", callback);
    }
  }
};
