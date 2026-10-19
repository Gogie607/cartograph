import { spawnSync } from "node:child_process";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import type { ExcludedEntry } from "./types.mts";

export const portable = (path: string) => path.replaceAll("\\", "/");

const excludedDirectories = new Set(["node_modules", ".git", ".venv", "venv", "__pycache__", ".pytest_cache", ".mypy_cache", ".ruff_cache", "build", "dist"]);
const excludesDirectory = (name: string) => excludedDirectories.has(name) || name.endsWith(".egg-info");

export async function inventory(root: string) {
  const excludedEntries: ExcludedEntry[] = [];
  const skipped = new Map<string, string>();
  const git = spawnSync("git", ["-C", root, "ls-files", "--cached", "--others", "--exclude-standard", "-z"], {
    encoding: "utf8", maxBuffer: 64 * 1024 * 1024,
  });
  if (git.status === 0) {
    const ignored = spawnSync("git", ["-C", root, "ls-files", "--others", "--ignored", "--exclude-standard", "--directory", "-z"], {
      encoding: "utf8", maxBuffer: 64 * 1024 * 1024,
    });
    if (ignored.status !== 0) throw new Error(`Could not inventory Git exclusions: ${ignored.stderr || ignored.error?.message}`);
    const paths = new Set(git.stdout.split("\0").filter(Boolean));
    for (const path of ignored.stdout.split("\0").filter(Boolean)) {
      if (path.endsWith("/")) excludedEntries.push({ path, reason: "Ignored by Git; directory not traversed" });
      else { paths.add(path); skipped.set(path, "Ignored by Git"); }
    }
    for (const path of paths) {
      const parts = path.split("/");
      const index = parts.slice(0, -1).findIndex(excludesDirectory);
      if (index < 0) continue;
      const directory = `${parts.slice(0, index + 1).join("/")}/`;
      paths.delete(path);
      skipped.delete(path);
      if (!excludedEntries.some((entry) => entry.path === directory)) excludedEntries.push({ path: directory, reason: "Generated, dependency or environment directory not traversed" });
    }
    excludedEntries.push({ path: ".git/", reason: "Version control metadata not traversed" });
    return { mode: "git" as const, paths: [...paths].sort(), skipped, excludedEntries };
  }
  if (git.error && "code" in git.error && git.error.code !== "ENOENT") throw git.error;
  if (git.status !== 128 && !git.error) throw new Error(`Git inventory failed: ${git.stderr}`);

  const paths: string[] = [];
  async function walk(folder: string) {
    const entries = await readdir(join(root, folder), { withFileTypes: true });
    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      const path = portable(join(folder, entry.name));
      if (entry.isDirectory()) {
        if (excludesDirectory(entry.name)) {
          excludedEntries.push({ path: `${path}/`, reason: "Generated, dependency, environment or version control directory not traversed" });
        } else await walk(path);
      } else paths.push(path);
    }
  }
  await walk("");
  return { mode: "filesystem" as const, paths: paths.sort(), skipped, excludedEntries };
}
