import type { DependencyEdge, ImportRecord, ParsedFile } from "./types.mts";

export function buildGraph(files: ParsedFile[], imports: ImportRecord[]) {
  const paths = new Set(files.map((file) => file.path));
  const unique = new Map<string, DependencyEdge>();
  for (const record of imports) {
    if (record.outcome !== "resolved" || record.target === null) continue;
    if (!paths.has(record.source) || !paths.has(record.target)) {
      throw new Error(`Resolved import has no graph node: ${record.source} -> ${record.target}`);
    }
    const key = `${record.source}\0${record.target}`;
    const existing = unique.get(key);
    if (existing) {
      if (!existing.kinds.includes(record.kind)) existing.kinds.push(record.kind);
    } else {
      unique.set(key, { source: record.source, target: record.target, kinds: [record.kind] });
    }
  }
  const edges = [...unique.values()].sort((a, b) => a.source.localeCompare(b.source) || a.target.localeCompare(b.target));
  const incoming = new Map<string, number>();
  const outgoing = new Map<string, number>();
  for (const edge of edges) {
    edge.kinds.sort();
    incoming.set(edge.target, (incoming.get(edge.target) ?? 0) + 1);
    outgoing.set(edge.source, (outgoing.get(edge.source) ?? 0) + 1);
  }
  return {
    files: files.map((file) => ({ ...file, fanIn: incoming.get(file.path) ?? 0, fanOut: outgoing.get(file.path) ?? 0 })),
    edges,
  };
}
