import type { FrameworkAdapter } from "../adapters.mts";
import type { ConfigurationReport, ImportRecord, ParsedFile, SkippedFile } from "../types.mts";

export interface LanguageFile { path: string; language: string }

export interface LanguageParserContext {
  root: string;
  files: readonly LanguageFile[];
  excludedFiles: ReadonlyMap<string, string>;
  adapter: FrameworkAdapter;
}

export interface LanguageParseResult {
  files: ParsedFile[];
  imports: ImportRecord[];
  modules: { path: string; name: string | null }[];
  skipped: SkippedFile[];
  configurations: ConfigurationReport[];
}

export interface LanguageParser {
  id: string;
  /** Extensions include the leading dot; values are stable language identifiers. */
  extensions: Readonly<Record<string, string>>;
  parse(context: LanguageParserContext): Promise<LanguageParseResult>;
}
