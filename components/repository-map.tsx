"use client";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  ReactFlow, ReactFlowProvider, Handle, Position, MarkerType,
  useReactFlow, useUpdateNodeInternals, useStore, getNodesBounds, getViewportForBounds,
  type Node, type NodeProps, type Edge,
} from "@xyflow/react";
import { uniqueLabels, type FolderNode } from "@/map/folding.mts";
import { layoutFolders } from "@/map/layout.mts";
import { fileCategory, categoryColor } from "@/map/categories.mts";
import "@xyflow/react/dist/style.css";
import styles from "./repository-map.module.css";
import { useRepositoryWorkspace } from "./repository-workspace";

const ROW = 28;
const HEADER = 64;
const VISIBLE_ROWS = 8;
type FolderData = {
  folder: FolderNode;
  label: string;
  labels: Map<string, string>;
  open: boolean;
  height: number;
};
type FlowFolder = Node<FolderData, "folder">;

function Folder({ id, data }: NodeProps<FlowFolder>) {
  const { selected, hovered, toggle, selectFile, clear, setHovered, activeFiles } = useRepositoryWorkspace();
  const select = (path: string) => {
    if (selected?.kind === "file" && selected.id === path) clear(); else selectFile(path);
  };
  const highlighted = hovered?.kind === "folder" ? hovered.id === id : data.folder.files.some((file) => file.path === hovered?.id);
  const dimmed = activeFiles !== null && !data.folder.files.some((file) => activeFiles.has(file.path)) && !highlighted;
  const [scrollTop, setScrollTop] = useState(0);
  const update = useUpdateNodeInternals();
  const open = data.open;
  const rows = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!open || selected?.kind !== "file" || !rows.current) return;
    const index = data.folder.files.findIndex((file) => file.path === selected?.id);
    if (index < 0) return;
    const top = index * ROW;
    if (top < rows.current.scrollTop || top + ROW > rows.current.scrollTop + rows.current.clientHeight) rows.current.scrollTop = top;
  }, [open, selected, data.folder.files]);
  const bodyHeight = Math.min(data.folder.files.length, VISIBLE_ROWS) * ROW;
  useLayoutEffect(() => { update(id); }, [id, open, scrollTop, data.height, update]);
  const first = Math.floor(scrollTop / ROW);
  const last = Math.min(data.folder.files.length, Math.ceil((scrollTop + bodyHeight) / ROW));
  const outside = data.folder.files.length - (last - first);
  return (
    <div className={styles.folder} data-open={open} data-hovered={highlighted} onMouseEnter={() => setHovered({ kind: "folder", id })} onMouseLeave={() => setHovered(null)} data-selected={selected?.kind === "folder" && selected.id === id} style={{ height: data.height, opacity: dimmed ? 0.16 : 1 }}>
      <button className={`${styles.folderHeader} nodrag nopan`} aria-expanded={open} onMouseEnter={() => setHovered({ kind: "folder", id })} onFocus={() => setHovered({ kind: "folder", id })} onBlur={() => setHovered(null)} onClick={() => { setScrollTop(0); toggle(id); }} title={`${id}\n${open ? "Close folder" : "Open folder"}`}>
        <span className={styles.folderTitle}><span aria-hidden="true">{open ? "▾" : "▸"}</span><span>{data.label}</span></span>
        <span className={styles.folderStats}><span>{data.folder.files.length} files</span><span title="Distinct external files importing this folder" className={styles.incoming}>↓ {data.folder.fanIn}</span><span title="Distinct external files imported by this folder" className={styles.outgoing}>↑ {data.folder.fanOut}</span></span>
      </button>
      {open ? (
        <>
          <div ref={rows} className={`${styles.rows} nowheel nodrag nopan`} style={{ height: bodyHeight }} onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)} tabIndex={0} aria-label={`Files in ${id}`}>
            {data.folder.files.map((file) => (
              <button key={file.path} className={styles.row} data-file-path={file.path} data-hovered={hovered?.kind === "folder" ? hovered.id === id : hovered?.id === file.path} onMouseEnter={() => setHovered({ kind: "file", id: file.path })} onMouseLeave={() => setHovered({ kind: "folder", id })} onFocus={() => setHovered({ kind: "file", id: file.path })} onBlur={() => setHovered(null)} data-dimmed={activeFiles !== null && !activeFiles.has(file.path)} data-selected={selected?.kind === "file" && selected.id === file.path} onClick={() => select(file.path)} title={`${file.path}\nFan-in ${file.fanIn} · Fan-out ${file.fanOut}`}>
                <span className={styles.swatch} style={{ background: categoryColor(fileCategory(file)) }} />
                <span className={styles.fileName}>{data.labels.get(file.path)}</span>
                <span className={styles.rowCounts}>{file.fanIn}↓ {file.fanOut}↑</span>
              </button>
            ))}
          </div>
          <div className={styles.scrollNote}>{outside > 0 ? `${outside} more outside view · scroll` : `${data.folder.files.length} files`}</div>
          {data.folder.files.map((file, index) => {
            // Offscreen endpoints stay on the panel's scroll boundary, never its header.
            const top = HEADER + Math.max(3, Math.min(bodyHeight - 3, index * ROW + ROW / 2 - scrollTop));
            return <span key={file.path}><Handle id={`in:${file.path}`} type="target" position={Position.Left} style={{ top }} isConnectable={false} /><Handle id={`out:${file.path}`} type="source" position={Position.Right} style={{ top }} isConnectable={false} /></span>;
          })}
        </>
      ) : <><Handle id="in" type="target" position={Position.Left} isConnectable={false} /><Handle id="out" type="source" position={Position.Right} isConnectable={false} /></>}
    </div>
  );
}

const nodeTypes = { folder: Folder };

function MapCanvas() {
  const { repository, folded, expanded, selected, clear, selectedFiles } = useRepositoryWorkspace();
  const flow = useReactFlow<FlowFolder>();
  const width = useStore((state) => state.width);
  const height = useStore((state) => state.height);
  const handleSnapshot = useStore((state) => [...state.nodeLookup.values()].flatMap((node) => [
    ...(node.internals.handleBounds?.source ?? []).map((handle) => JSON.stringify([node.id, "source", handle.id])),
    ...(node.internals.handleBounds?.target ?? []).map((handle) => JSON.stringify([node.id, "target", handle.id])),
  ]).join("\0"));
  const geometry = useMemo(() => {
    const visiblePaths = folded.nodes.flatMap((folder) => expanded.has(folder.id) ? [folder.id, ...folder.files.map((file) => file.path)] : [folder.id]);
    const labels = uniqueLabels(visiblePaths);
    const boxes = folded.nodes.map((folder) => {
      const label = labels.get(folder.id) ?? folder.id;
      const open = expanded.has(folder.id);
      return {
        id: folder.id,
        width: open ? Math.max(260, label.length * 7 + 48, ...folder.files.map((file) => (labels.get(file.path)?.length ?? 0) * 7 + 100)) : Math.max(152, label.length * 7 + 48),
        height: open ? HEADER + Math.min(VISIBLE_ROWS, folder.files.length) * ROW + 24 : HEADER + Math.round(Math.sqrt(folder.fanIn) * 14),
      };
    });
    const positions = layoutFolders(boxes, folded.edges);
    return { labels, boxes, positions };
  }, [folded, expanded]);

  // Hover and selection belong to Folder's context, not controlled node props.
  // Replacing those props clears React Flow's measurements and handle bounds.
  const nodes = useMemo((): FlowFolder[] => {
    const { labels, boxes, positions } = geometry;
    const nodes: FlowFolder[] = folded.nodes.map((folder, index) => {
      const box = boxes[index];
      return {
        id: folder.id, type: "folder", position: positions.get(folder.id) ?? { x: 0, y: 0 },
        className: "nopan",
        width: box.width, height: box.height,
        // React Flow disables pointer events on fixed, nonselectable nodes;
        // their custom folder and file buttons still need to receive clicks.
        style: { width: box.width, height: box.height, pointerEvents: "all" },
        data: { folder, label: labels.get(folder.id) ?? folder.id, labels, open: expanded.has(folder.id), height: box.height },
      };
    });
    return nodes;
  }, [geometry, folded, expanded]);

  const projectedEdges = useMemo(() => {
    const activeEdge = (source: string, target: string) => selectedFiles === null || selectedFiles.has(source) || selectedFiles.has(target);
    const connections = new Map<string, Edge>();
    for (const edge of repository.edges) {
      const source = folded.owner.get(edge.source);
      const target = folded.owner.get(edge.target);
      if (source === undefined || target === undefined) throw new Error("An edge has no folded endpoint");
      if (source === target && !expanded.has(source)) continue;
      const sourceHandle = expanded.has(source) ? `out:${edge.source}` : "out";
      const targetHandle = expanded.has(target) ? `in:${edge.target}` : "in";
      const id = JSON.stringify([source, sourceHandle, target, targetHandle]);
      const active = activeEdge(edge.source, edge.target);
      const existing = connections.get(id);
      if (existing && !active) continue;
      const incoming = selectedFiles?.has(edge.target);
      const outgoing = selectedFiles?.has(edge.source);
      const color = incoming ? "var(--map-incoming)" : outgoing ? "var(--map-outgoing)" : "var(--muted)";
      connections.set(id, {
        id, source, target, sourceHandle, targetHandle, type: "default", animated: false,
        markerEnd: { type: MarkerType.ArrowClosed, width: 12, height: 12, color },
        style: { opacity: active ? (selected ? 1 : 0.4) : 0.06, stroke: color, strokeWidth: selected && active ? 1.5 : 1 },
        zIndex: 0,
      });
    }
    return [...connections.values()];
  }, [folded, expanded, selected, selectedFiles, repository.edges]);

  // Handle measurement must not recreate controlled nodes: React Flow clears
  // their measurements when given new node objects without measured dimensions.
  const edges = useMemo(() => {
    const handles = new Set(handleSnapshot.split("\0"));
    return projectedEdges.filter((edge) =>
      handles.has(JSON.stringify([edge.source, "source", edge.sourceHandle])) &&
      handles.has(JSON.stringify([edge.target, "target", edge.targetHandle])),
    );
  }, [projectedEdges, handleSnapshot]);

  const fit = useCallback((maxZoom = 1) => {
    if (!flow.viewportInitialized || width <= 0 || height <= 0 || !nodes.length) return;
    // Our layout supplies exact sizes, so fitting never waits for DOM measurements
    // or React Flow's queued fitView node updates.
    const viewport = getViewportForBounds(getNodesBounds(nodes), width, height, 0.05, maxZoom, 0.08);
    void flow.setViewport(viewport, { duration: 0 });
  }, [flow, width, height, nodes]);
  const fittedGeometry = useRef<typeof geometry | null>(null);
  const fittedSize = useRef({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!flow.viewportInitialized || width <= 0 || height <= 0) return;
    if (fittedGeometry.current === geometry && fittedSize.current.width === width && fittedSize.current.height === height) return;
    fit(fittedGeometry.current === null ? 1 : flow.getZoom());
    fittedGeometry.current = geometry;
    fittedSize.current = { width, height };
  }, [geometry, flow, width, height, fit]);

  return (
    <div className={styles.map}>
      <div className={styles.viewport}>
        <ReactFlow<FlowFolder> nodes={nodes} edges={edges} nodeTypes={nodeTypes} nodesDraggable={false} nodesConnectable={false} elementsSelectable={false} minZoom={0.05} maxZoom={2} zoomOnDoubleClick={false} onPaneClick={clear} onError={(code, message) => { throw new Error(`React Flow ${code}: ${message}`); }} />
        <div className={styles.controls} role="group" aria-label="Map view controls">
          <button onClick={() => void flow.zoomOut({ duration: 0 })} aria-label="Zoom out">−</button>
          <button onClick={() => fit()}>Fit</button>
          <button onClick={() => void flow.zoomIn({ duration: 0 })} aria-label="Zoom in">+</button>
          {selected && <button onClick={clear}>Clear selection</button>}
        </div>
      </div>
      <div className={styles.legend}><span>{folded.nodes.length} folders · {repository.files.length.toLocaleString()} files</span><span>Height = fan-in</span><span className={styles.incoming}>↓ Incoming</span><span className={styles.outgoing}>↑ Outgoing</span></div>
    </div>
  );
}

export function RepositoryMap() {
  return <ReactFlowProvider><MapCanvas /></ReactFlowProvider>;
}
