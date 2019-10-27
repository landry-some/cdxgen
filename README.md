[![Build Status](https://github.com/CycloneDX/cyclonedx-node-module/workflows/Node%20CI/badge.svg)](https://github.com/CycloneDX/cyclonedx-node-module/actions?workflow=Node+CI)
[![License](https://img.shields.io/badge/license-Apache%202.0-brightgreen.svg)][License]
[![Latest](
https://img.shields.io/npm/v/@cyclonedx/bom)](https://www.npmjs.com/package/@cyclonedx/bom)
[![Website](https://img.shields.io/badge/https://-cyclonedx.org-blue.svg)](https://cyclonedx.org/)
[![Group Discussion](https://img.shields.io/badge/discussion-groups.io-blue.svg)](https://groups.io/g/CycloneDX)
[![Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Follow)](https://twitter.com/CycloneDX_Spec)

CycloneDX Node.js Module
=========

The CycloneDX module for Node.js creates a valid CycloneDX Software Bill-of-Materials (SBOM) containing an aggregate of all project dependencies. CycloneDX is a lightweight SBOM specification that is easily created, human and machine readable, and simple to parse.

Usage
-------------------

#### Installing

```bash
npm install -g @cyclonedx/bom
```

#### Getting Help
```bash
$ cyclonedx-bom -h
Usage:  cyclonedx-bom [OPTIONS] [path]
Options:
  -h        - this help
  -a <path> - merge in additional modules from other scanner
  -o <path> - write to file instead of stdout
  -ns       - do not generate bom serial number
  -d        - include devDependencies
  --version - print version number
```

#### Example
```bash
cyclonedx-bom -o bom.xml
```

License
-------------------

Permission to modify and redistribute is granted under the terms of the Apache 2.0 license. See the [LICENSE] file for the full license.

[License]: https://github.com/CycloneDX/cyclonedx-node-module/blob/master/LICENSE
