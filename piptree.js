/**
 * The idea behind this plugin came from the excellent pipdeptree package
 * https://github.com/tox-dev/pipdeptree
 *
 * We use the internal pip api to construct the dependency tree for modern python + pip environments
 */
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const PIP_TREE_PLUGIN_CONTENT = `
import importlib.metadata as importlib_metadata
import json
import sys

from pip._internal.metadata import pkg_resources


def frozen_req_from_dist(dist):
    try:
        from pip._internal.operations.freeze import FrozenRequirement
    except ImportError:
        from pip import FrozenRequirement
    try:
        from pip._internal import metadata

        dist = metadata.pkg_resources.Distribution(dist)
        try:
            fr = FrozenRequirement.from_dist(dist)
        except TypeError:
            fr = FrozenRequirement.from_dist(dist, [])
        return str(fr).strip()
    except ImportError:
        pass


def get_installed_distributions():
    dists = pkg_resources.Environment.from_paths(None).iter_installed_distributions(
        local_only=False,
        skip=(),
        user_only=False,
    )
    return [d._dist for d in dists]


def find_deps(idx, visited, reqs):
    freqs = []
    for r in reqs:
        d = idx.get(r.key)
        r.project_name = d.project_name if d is not None else r.project_name
        if visited.get(r.project_name):
            return freqs
        specs = sorted(r.specs, reverse=True)
        specs_str = ",".join(["".join(sp) for sp in specs]) if specs else ""
        visited[r.project_name] = True
        dreqs = d.requires()
        freqs.append(
            {
                "name": r.project_name,
                "version": importlib_metadata.version(r.key),
                "versionSpecifiers": specs_str,
                "dependencies": find_deps(idx, visited, dreqs) if dreqs else [],
            }
        )
    return freqs


def main(argv):
    out_file = "piptree.json" if len(argv) < 2 else argv[-1]
    tree = []
    pkgs = get_installed_distributions()
    idx = {p.key: p for p in pkgs}
    visited = {}
    for p in pkgs:
        fr = frozen_req_from_dist(p)
        tmpA = fr.split("==")
        name = tmpA[0]
        if name.startswith("-e"):
            continue
        version = ""
        if len(tmpA) == 2:
            version = tmpA[1]
        tree.append(
            {
                "name": name,
                "version": version,
                "dependencies": find_deps(idx, visited, p.requires()),
            }
        )
    all_deps = {}
    for t in tree:
        for d in t["dependencies"]:
            all_deps[d["name"]] = True
    trimmed_tree = [
        t for t in tree if t["name"] not in all_deps
    ]
    with open(out_file, mode="w", encoding="utf-8") as fp:
        json.dump(trimmed_tree, fp)


if __name__ == "__main__":
    main(sys.argv)
`;

/**
 * Execute the piptree plugin and return the generated tree as json object
 */
export const getTreeWithPlugin = (env, python_cmd, basePath) => {
  let tree = [];
  const tempDir = mkdtempSync(join(tmpdir(), "cdxgen-piptree-"));
  const pipPlugin = join(tempDir, "piptree.py");
  const pipTreeJson = join(tempDir, "piptree.json");
  const pipPluginArgs = [pipPlugin, pipTreeJson];
  writeFileSync(pipPlugin, PIP_TREE_PLUGIN_CONTENT);
  const result = spawnSync(python_cmd, pipPluginArgs, {
    cwd: basePath,
    encoding: "utf-8",
    env
  });
  if (result.status !== 0 || result.error) {
    console.log(result.stdout, result.stderr);
  }
  if (existsSync(pipTreeJson)) {
    tree = JSON.parse(
      readFileSync(pipTreeJson, {
        encoding: "utf-8"
      })
    );
  }
  if (rmSync) {
    rmSync(tempDir, { recursive: true, force: true });
  }
  return tree;
};
