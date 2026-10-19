import type { LanguageParser } from "./contract.mts";

export const noParseParser: LanguageParser = {
  id: "none",
  extensions: {},
  async parse({ files }) {
    return {
      files: [], imports: [], modules: [], configurations: [],
      skipped: files.map(({ path, language }) => ({
        path, language,
        reason: language === "unknown" ? "Unknown language or non-source file; no parser available" : `No parser available for language: ${language}`,
      })),
    };
  },
};
