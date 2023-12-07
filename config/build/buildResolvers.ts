import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/config";

export function buildResolver(
  buildPaths: BuildPaths
): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    preferAbsolute: true,
    modules: [buildPaths.src, "node_modules"],
    alias: {
      "@": buildPaths.src,
    },
  };
}
