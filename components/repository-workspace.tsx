"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { ParsedRepository } from "@/parser/types.mts";
import { foldRepository } from "@/map/folding.mts";
import { repositoryDetails } from "@/map/details.mts";

export type MapSelection = { kind: "folder" | "file"; id: string } | null;

function useWorkspaceState(repository: ParsedRepository, name: string) {
  const folded = useMemo(() => foldRepository(repository.files, repository.edges), [repository]);
  const details = useMemo(() => repositoryDetails(repository.files, repository.edges), [repository]);
  const [selected, setSelected] = useState<MapSelection>(null);
  const [hovered, setHovered] = useState<MapSelection>(null);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const { selectedFiles, activeFiles } = useMemo(() => {
    if (!selected) return { selectedFiles: null, activeFiles: null };
    const selectedFiles = new Set(selected.kind === "file" ? [selected.id] : folded.nodes.find((folder) => folder.id === selected.id)?.files.map((file) => file.path));
    const activeFiles = new Set(selectedFiles);
    for (const edge of repository.edges) {
      if (selectedFiles.has(edge.source) || selectedFiles.has(edge.target)) {
        activeFiles.add(edge.source);
        activeFiles.add(edge.target);
      }
    }
    return { selectedFiles, activeFiles };
  }, [selected, folded, repository.edges]);
  const toggle = useCallback((id: string) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
    setHovered(null);
    setSelected({ kind: "folder", id });
  }, []);
  const selectFile = useCallback((path: string) => {
    const owner = folded.owner.get(path);
    if (owner === undefined) throw new Error(`File has no map folder: ${path}`);
    setExpanded((current) => current.has(owner) ? current : new Set([...current, owner]));
    setHovered(null);
    setSelected({ kind: "file", id: path });
  }, [folded]);
  const clear = useCallback(() => { setSelected(null); setHovered(null); }, []);
  return { repository, name, folded, details, selected, hovered, expanded, selectedFiles, activeFiles, toggle, selectFile, clear, setHovered };
}

const WorkspaceContext = createContext<ReturnType<typeof useWorkspaceState> | null>(null);

export function RepositoryWorkspace({ repository, name, children }: { repository: ParsedRepository; name: string; children: ReactNode }) {
  const value = useWorkspaceState(repository, name);
  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useRepositoryWorkspace() {
  const workspace = useContext(WorkspaceContext);
  if (!workspace) throw new Error("Repository map and detail pane require RepositoryWorkspace");
  return workspace;
}
