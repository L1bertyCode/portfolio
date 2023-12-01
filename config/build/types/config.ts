export type BuildMode = "development" | "production";
export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  favicon: string;
  src: string;
}
export interface BuildOptions {
  mode: BuildMode;
  isDev: boolean;
  buildPaths: BuildPaths;
  port: number;
}
