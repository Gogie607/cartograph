export interface FrameworkAdapter {
  name: string;
  classifyFile(file: { path: string; language: string; text: string }): string | null;
}

export const noFrameworkAdapter: FrameworkAdapter = {
  name: "none",
  classifyFile: () => null,
};
