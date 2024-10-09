import path from "path";
import { Configuration, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { buildResolvers } from "./config/build/buildResolvers";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildPlugins } from "./config/build/buildPlugis";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv): Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, "public", "index.html")
  };
  return buildWebpackConfig({ mode, paths, isDev });
};