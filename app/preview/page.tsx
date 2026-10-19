import { Suspense } from "react";
import styles from "./preview.module.css";
import { repository as typescriptRepository } from "@/data/preview-repository.mts";
import { repository as pythonRepository } from "@/data/preview-python-repository.mts";
import type { ParsedRepository } from "@/parser/types.mts";
import { RepositoryWorkspace } from "@/components/repository-workspace";
import { RepositoryDetails } from "@/components/repository-details";
import { RepositoryMap } from "@/components/repository-map";
import { categoryColor, fileCategory } from "@/map/categories.mts";

const examples: Record<string, { repository: ParsedRepository; label: string }> = {
  typescript: { repository: typescriptRepository, label: "h3js/h3" },
  python: { repository: pythonRepository, label: "runweaver-ml/dataset_management" },
};

type PreviewProps = { searchParams: Promise<{ example?: string | string[] }> };

export default function PreviewPage({ searchParams }: PreviewProps) {
  return <Suspense fallback={null}><PreviewExample searchParams={searchParams} /></Suspense>;
}

async function PreviewExample({ searchParams }: PreviewProps) {
  const { example } = await searchParams;
  const selected = typeof example === "string" && Object.hasOwn(examples, example) ? examples[example] : examples.typescript;
  const { repository } = selected;
  const categories = new Map<string, number>();
  for (const file of repository.files) {
    const category = fileCategory(file);
    categories.set(category, (categories.get(category) ?? 0) + 1);
  }
  return (
    <RepositoryWorkspace key={selected.label} repository={repository} name={selected.label}>
    <main className={styles.shell} data-repository-shell aria-label="Repository map preview">
      <aside className={styles.rail} aria-labelledby="categories-heading">
        <h2 id="categories-heading" className={styles.heading}>File categories</h2>
        <ul className={styles.categories}>
          {[...categories].sort(([a], [b]) => a.localeCompare(b)).map(([category, count]) => (
            <li key={category}><span className={styles.swatch} style={{ background: categoryColor(category) }} /><span>{category}</span><span className={styles.count}>{count}</span></li>
          ))}
        </ul>
        <div className={styles.coverage}>
          <p>{repository.coverage.files.parsed.toLocaleString()} parsed files</p>
          <p>{repository.coverage.files.skipped.toLocaleString()} skipped files</p>
          <p>{repository.edges.length.toLocaleString()} resolved edges</p>
          <p>{repository.coverage.imports.unresolved.toLocaleString()} unresolved imports</p>
          <details><summary>Coverage details</summary><p>Only resolved imports appear as edges. Imports the parser could not resolve are counted here and are not drawn.</p><p>Skipped files include unsupported languages and non-source files.</p></details>
        </div>
      </aside>

      <section className={styles.center} aria-labelledby="map-heading">
        <header className={styles.toolbar}>
          <h1 id="map-heading" className={styles.heading}>Dependency map</h1>
          <span className={styles.previewLabel}>{selected.label} · local preview</span>
        </header>
        <div className={styles.canvas}>
          <RepositoryMap />
        </div>
      </section>

      <aside className={styles.details} aria-label="Repository details"><RepositoryDetails /></aside>
    </main>
    </RepositoryWorkspace>
  );
}
