import type { DependencyEdge, ParsedFile } from "../parser/types.mts";
import { fileCategory } from "./categories.mts";

export function repositoryDetails(files: readonly ParsedFile[], edges: readonly DependencyEdge[]) {
  const byPath = new Map(files.map((file) => [file.path, file]));
  const incoming = new Map(files.map((file) => [file.path, new Set<string>()]));
  const outgoing = new Map(files.map((file) => [file.path, new Set<string>()]));
  for (const edge of edges) {
    if (!byPath.has(edge.source) || !byPath.has(edge.target)) throw new Error(`Missing detail endpoint: ${edge.source} -> ${edge.target}`);
    outgoing.get(edge.source)!.add(edge.target);
    incoming.get(edge.target)!.add(edge.source);
  }
  const neighbours = new Map(files.map((file) => [file.path, {
    dependencies: [...outgoing.get(file.path)!].sort(),
    dependents: [...incoming.get(file.path)!].sort(),
  }]));
  const mostImported = [...files].filter((file) => incoming.get(file.path)!.size > 0)
    .sort((a, b) => incoming.get(b.path)!.size - incoming.get(a.path)!.size || a.path.localeCompare(b.path));
  const entryFiles = [...files].filter((file) => incoming.get(file.path)!.size === 0).sort((a, b) => a.path.localeCompare(b.path));
  return { byPath, neighbours, mostImported, entryFiles, unidentified: files.filter((file) => file.role === null).length };
}

export function categoryCounts(files: readonly ParsedFile[]) {
  const counts = new Map<string, number>();
  for (const file of files) {
    const category = fileCategory(file);
    counts.set(category, (counts.get(category) ?? 0) + 1);
  }
  return [...counts].sort(([a], [b]) => a.localeCompare(b));
}
