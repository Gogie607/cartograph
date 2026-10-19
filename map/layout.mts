import { graphlib, layout, type GraphLabel, type NodeLabel, type EdgeLabel } from "@dagrejs/dagre";
import type { FolderEdge } from "./folding.mts";

export interface MapBox { id: string; width: number; height: number }
type Point = { x: number; y: number };

function pack(boxes: readonly MapBox[], aspect: number) {
  const target = Math.max(0, ...boxes.map((box) => box.width), Math.sqrt(boxes.reduce((area, box) => area + (box.width + 20) * (box.height + 20), 0) * aspect));
  const positions = new Map<string, Point>();
  let x = 0, y = 0, rowHeight = 0, width = 0;
  for (const box of boxes) {
    if (x > 0 && x + box.width > target) { x = 0; y += rowHeight + 20; rowHeight = 0; }
    positions.set(box.id, { x, y });
    width = Math.max(width, x + box.width);
    x += box.width + 20;
    rowHeight = Math.max(rowHeight, box.height);
  }
  return { positions, width, height: y + rowHeight };
}

export function layoutFolders(boxes: readonly MapBox[], edges: readonly FolderEdge[]) {
  const graph = new graphlib.Graph<GraphLabel, NodeLabel, EdgeLabel>().setGraph({}).setDefaultEdgeLabel(() => ({}));
  for (const box of [...boxes].sort((a, b) => a.id < b.id ? -1 : 1)) graph.setNode(box.id, { width: box.width, height: box.height });
  for (const edge of [...edges].sort((a, b) => a.source < b.source ? -1 : a.source > b.source ? 1 : a.target < b.target ? -1 : 1)) {
    if (!graph.hasNode(edge.source) || !graph.hasNode(edge.target)) throw new Error(`Layout edge has no endpoint: ${edge.source} -> ${edge.target}`);
    graph.setEdge(edge.source, edge.target);
  }
  // Folder aggregation creates cycles even when individual imports are acyclic.
  // Keep strongly connected folders compact instead of stretching their back-edges.
  const clusters = graphlib.alg.tarjan(graph).map((members) => {
    members.sort();
    const packed = pack(members.map((id) => ({ id, width: graph.node(id).width, height: graph.node(id).height })), 1.5);
    return { id: members[0], members, ...packed };
  }).sort((a, b) => a.id < b.id ? -1 : 1);
  const owner = new Map(clusters.flatMap((cluster) => cluster.members.map((id) => [id, cluster.id] as const)));
  const condensed = new graphlib.Graph<GraphLabel, NodeLabel, EdgeLabel>().setGraph({}).setDefaultEdgeLabel(() => ({}));
  for (const cluster of clusters) condensed.setNode(cluster.id, { width: cluster.width, height: cluster.height });
  for (const edge of graph.edges()) {
    const source = owner.get(edge.v)!, target = owner.get(edge.w)!;
    if (source !== target) condensed.setEdge(source, target);
  }
  // Disconnected components remain disconnected; packing introduces no edges.
  const chunks = graphlib.alg.components(condensed).map((ids) => {
    ids.sort();
    const component = new graphlib.Graph<GraphLabel, NodeLabel, EdgeLabel>().setGraph({ rankdir: "LR", nodesep: 20, ranksep: 28, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(() => ({}));
    for (const id of ids) component.setNode(id, { ...condensed.node(id) });
    const members = new Set(ids);
    for (const edge of condensed.edges()) if (members.has(edge.v) && members.has(edge.w)) component.setEdge(edge.v, edge.w);
    layout(component);
    return { id: ids[0], graph: component, ids, width: component.graph().width ?? 0, height: component.graph().height ?? 0 };
  }).sort((a, b) => b.height - a.height || b.width - a.width || (a.id < b.id ? -1 : 1));
  const packed = pack(chunks, 1.5);
  const positions = new Map<string, Point>();
  for (const chunk of chunks) {
    const origin = packed.positions.get(chunk.id)!;
    for (const id of chunk.ids) {
      const node = chunk.graph.node(id);
      if (node.x === undefined || node.y === undefined) throw new Error(`Layout did not position ${id}`);
      const cluster = clusters.find((item) => item.id === id)!;
      for (const member of cluster.members) {
        const offset = cluster.positions.get(member)!;
        positions.set(member, { x: origin.x + node.x - node.width / 2 + offset.x, y: origin.y + node.y - node.height / 2 + offset.y });
      }
    }
  }
  return positions;
}
