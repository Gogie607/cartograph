"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { categoryCounts } from "@/map/details.mts";
import { fileCategory } from "@/map/categories.mts";
import { useRepositoryWorkspace } from "./repository-workspace";
import styles from "./repository-details.module.css";

function FilePath({ path, count }: { path: string; count?: number }) {
  const { selectFile, hovered, setHovered, folded } = useRepositoryWorkspace();
  const highlighted = hovered?.kind === "file" ? hovered.id === path : hovered?.kind === "folder" && folded.owner.get(path) === hovered.id;
  return (
    <button className={styles.path} data-hovered={highlighted} onClick={() => selectFile(path)}
      onMouseEnter={() => setHovered({ kind: "file", id: path })} onMouseLeave={() => setHovered(null)}
      onFocus={() => setHovered({ kind: "file", id: path })} onBlur={() => setHovered(null)} title={path}>
      <span>{path}</span>{count !== undefined && <span className={styles.count}>{count}</span>}
    </button>
  );
}

function PathList({ title, paths, counts }: { title: string; paths: string[]; counts?: ReadonlyMap<string, number> }) {
  return (
    <section className={styles.section}>
      <h3>{title} <span className={styles.count}>{paths.length}</span></h3>
      {paths.length ? <ul className={styles.paths}>{paths.map((path) => <li key={path}><FilePath path={path} count={counts?.get(path)} /></li>)}</ul> : <p className={styles.empty}>None.</p>}
    </section>
  );
}

function Structure() {
  const { repository, name, selected, folded, details } = useRepositoryWorkspace();
  if (selected?.kind === "file") {
    const file = details.byPath.get(selected.id);
    const neighbours = details.neighbours.get(selected.id);
    if (!file || !neighbours) throw new Error(`Selected file is missing: ${selected.id}`);
    return (
      <>
        <section className={styles.section}>
          <h2>File</h2>
          <FilePath path={file.path} />
          <dl className={styles.facts}>
            <dt>Kind</dt><dd>{fileCategory(file)}</dd>
            <dt>Lines</dt><dd>{file.lineCount.toLocaleString()}</dd>
            <dt>Depends on</dt><dd>{neighbours.dependencies.length}</dd>
            <dt>Depended on by</dt><dd>{neighbours.dependents.length}</dd>
          </dl>
        </section>
        <PathList title="Dependencies" paths={neighbours.dependencies} />
        <PathList title="Dependents" paths={neighbours.dependents} />
      </>
    );
  }
  if (selected?.kind === "folder") {
    const folder = folded.nodes.find((node) => node.id === selected.id);
    if (!folder) throw new Error(`Selected folder is missing: ${selected.id}`);
    return (
      <>
        <section className={styles.section}>
          <h2>Folder</h2><p className={styles.folderPath}>{folder.id}</p>
          <dl className={styles.facts}>
            <dt>Files</dt><dd>{folder.files.length}</dd>
            {categoryCounts(folder.files).map(([category, count]) => <div className={styles.fact} key={category}><dt>{category}</dt><dd>{count}</dd></div>)}
          </dl>
        </section>
        <PathList title="Files" paths={folder.files.map((file) => file.path)} />
      </>
    );
  }
  const counts = new Map([...details.neighbours].map(([path, neighbours]) => [path, neighbours.dependents.length]));
  return (
    <>
      <section className={styles.section}>
        <h2>Repository</h2><p className={styles.repositoryName}>{name}</p>
        <dl className={styles.facts}>
          <dt>Framework</dt><dd>{repository.adapter === "none" ? "Not detected" : repository.adapter}</dd>
          <dt>Files</dt><dd>{repository.files.length.toLocaleString()}</dd>
          <dt>Imports</dt><dd>{repository.coverage.imports.found.toLocaleString()}</dd>
          <dt>Routes</dt><dd>Not available</dd>
          <dt>Unidentified files</dt><dd>{details.unidentified.toLocaleString()}</dd>
        </dl>
        <p className={styles.note}>Routes are not recorded in this parser output. Unidentified files have no convention-assigned role.</p>
      </section>
      <PathList title="Most depended on" paths={details.mostImported.map((file) => file.path)} counts={counts} />
      <PathList title="Where to start reading" paths={details.entryFiles.map((file) => file.path)} />
      <p className={styles.note}>Starting files have no resolved incoming imports. External and unresolved imports are excluded from dependency lists.</p>
    </>
  );
}

export function RepositoryDetails() {
  const { selected, setHovered } = useRepositoryWorkspace();
  const content = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"structure" | "explanation">("structure");
  useLayoutEffect(() => { if (content.current) content.current.scrollTop = 0; }, [selected?.kind, selected?.id, tab]);
  return (
    <div className={styles.pane}>
      <div className={styles.tabs} role="tablist" aria-label="Repository details">
        {(["structure", "explanation"] as const).map((value) => (
          <button key={value} id={`details-tab-${value}`} role="tab" aria-selected={tab === value} aria-controls={`details-panel-${value}`}
            onClick={() => { setHovered(null); setTab(value); }} onKeyDown={(event) => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              const next = event.key === "Home" ? "structure" : event.key === "End" ? "explanation" : tab === "structure" ? "explanation" : "structure";
              setHovered(null);
              setTab(next);
              document.getElementById(`details-tab-${next}`)?.focus();
            }} tabIndex={tab === value ? 0 : -1}>{value === "structure" ? "Structure" : "Explanation"}</button>
        ))}
      </div>
      <div ref={content} className={styles.content} role="tabpanel" id={`details-panel-${tab}`} aria-labelledby={`details-tab-${tab}`} tabIndex={0}>
        {tab === "structure" ? <Structure /> : <section className={styles.section}><h2>Explanation</h2><p className={styles.empty}>No explanation has been generated.</p></section>}
      </div>
    </div>
  );
}
