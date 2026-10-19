export type ImportKind = "import" | "re-export" | "dynamic-import";
export type ImportOutcome = "resolved" | "external" | "excluded" | "unresolved";

export interface ParsedFile {
  /** All paths are repository-relative, with forward slashes. Root folder is '.'. */
  path: string;
  language: string;
  folder: string;
  module: string;
  lineCount: number;
  contentHash: string;
  isModule: boolean;
  isDeclaration: boolean;
  role: string | null;
  fanIn: number;
  fanOut: number;
}

export interface DependencyEdge {
  source: string;
  target: string;
  kinds: ImportKind[];
}

export interface ImportRecord {
  source: string;
  line: number;
  column: number;
  kind: ImportKind;
  specifier: string | null;
  expression: string;
  outcome: ImportOutcome;
  target: string | null;
  reason: string;
}

export interface SkippedFile { path: string; reason: string; language: string }
export interface ExcludedEntry { path: string; reason: string }
export interface ConfigurationReport { path: string; messages: string[] }
export interface ImportCounts {
  found: number;
  resolved: number;
  external: number;
  excluded: number;
  unresolved: number;
}

export interface ParsedRepository {
  version: 2;
  adapter: string;
  languages: { language: string; parser: string; found: number; parsed: number; skipped: number }[];
  modules: { path: string; name: string | null }[];
  files: ParsedFile[];
  edges: DependencyEdge[];
  coverage: {
    inventory: "git" | "filesystem";
    files: { found: number; parsed: number; skipped: number; details: SkippedFile[] };
    /** Pruned directories are reported, never assigned an invented file count. */
    excludedEntries: ExcludedEntry[];
    imports: ImportCounts & { byKind: Record<ImportKind, ImportCounts>; records: ImportRecord[] };
    configurations: ConfigurationReport[];
  };
}
