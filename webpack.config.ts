import path from "path";

import { Configuration } from "webpack";
import {
  BuildEnv,
  BuildMode,
  BuildPaths,
} from "./config/build/types/config";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv): Configuration => {
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 5000;
  const apiUrl = env.apiUrl || "http://localhost:8000";
  const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(
      __dirname,
      "public",
      "favicon.ico"
    ),
    src: path.resolve(__dirname, "src"),
  };

  return buildWebpackConfig({
    mode,
    isDev,
    buildPaths,
    port: PORT,
    apiUrl,
  });
};
