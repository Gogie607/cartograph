import type { ParsedFile } from "../parser/types.mts";

export function fileCategory(file: ParsedFile) {
  // These are parser facts; framework roles wait for an adapter to supply them.
  return file.role ?? (file.isDeclaration ? "Declaration" : file.language === "typescript" ? "TypeScript" : file.language === "javascript" ? "JavaScript" : file.language.charAt(0).toUpperCase() + file.language.slice(1));
}

export function categoryColor(category: string) {
  return category === "TypeScript" ? "#6c9bd2" : category === "JavaScript" ? "#c4aa62" : category === "Declaration" ? "#a293bc" : "var(--muted)";
}
