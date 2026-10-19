import type { DependencyEdge, ParsedFile } from "../parser/types.mts";

export interface FolderNode {
  id: string;
  files: ParsedFile[];
  fanIn: number;
  fanOut: number;
}

export interface FolderEdge { source: string; target: string; count: number }

const parent = (path: string) => path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : ".";
const depth = (path: string) => path === "." ? 0 : path.split("/").length;
const compare = (a: string, b: string) => a < b ? -1 : a > b ? 1 : 0;

function foldPass(files: readonly ParsedFile[], threshold: number) {
  const folders = new Map<string, ParsedFile[]>();
  folders.set(".", []);
  for (const file of files) {
    let path = file.folder;
    if (!folders.has(path)) folders.set(path, []);
    folders.get(path)!.push(file);
    while (path !== ".") {
      path = parent(path);
      if (!folders.has(path)) folders.set(path, []);
    }
  }
  const maxDepth = Math.max(0, ...[...folders.keys()].map(depth));
  for (let level = maxDepth; level > 0; level--) {
    // Decide all merges at this depth before changing any of their parents.
    const merges = [...folders].filter(([path, members]) => depth(path) === level && members.length < threshold);
    for (const [path, members] of merges) {
      folders.get(parent(path))!.push(...members);
      folders.delete(path);
    }
  }
  return [...folders].filter(([, members]) => members.length > 0).sort(([a], [b]) => compare(a, b));
}

export function foldRepository(files: readonly ParsedFile[], edges: readonly DependencyEdge[]) {
  let threshold = 2;
  let groups = foldPass(files, threshold);
  while (groups.length > 24 && threshold <= files.length) groups = foldPass(files, ++threshold);
  const owner = new Map(groups.flatMap(([id, members]) => members.map((file) => [file.path, id] as const)));
  const incoming = new Map(groups.map(([id]) => [id, new Set<string>()]));
  const outgoing = new Map(groups.map(([id]) => [id, new Set<string>()]));
  const connections = new Map<string, FolderEdge>();
  for (const edge of edges) {
    const source = owner.get(edge.source);
    const target = owner.get(edge.target);
    if (source === undefined || target === undefined) throw new Error(`Missing folder for edge ${edge.source} -> ${edge.target}`);
    if (source === target) continue;
    incoming.get(target)!.add(edge.source);
    outgoing.get(source)!.add(edge.target);
    const key = `${source}\0${target}`;
    const connection = connections.get(key);
    if (connection) connection.count++;
    else connections.set(key, { source, target, count: 1 });
  }
  const nodes: FolderNode[] = groups.map(([id, members]) => ({
    id, files: members.sort((a, b) => compare(a.path, b.path)),
    fanIn: incoming.get(id)!.size, fanOut: outgoing.get(id)!.size,
  }));
  return { nodes, edges: [...connections.values()].sort((a, b) => compare(a.source, b.source) || compare(a.target, b.target)), owner, threshold };
}

/** Suffixes are compared across everything currently visible, not just siblings. */
export function uniqueLabels(paths: readonly string[]) {
  const unique = [...new Set(paths)];
  return new Map(unique.map((path) => {
    if (path === ".") return [path, "."];
    const parts = path.split("/");
    for (let count = 1; count <= parts.length; count++) {
      const suffix = parts.slice(-count).join("/");
      if (!unique.some((other) => other !== path && (other === suffix || other.endsWith(`/${suffix}`)))) return [path, suffix];
    }
    return [path, path];
  }));
}
