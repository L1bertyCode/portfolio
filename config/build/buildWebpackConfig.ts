import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildResolver } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig({
  mode,
  isDev,
  buildPaths,
  port,
}: BuildOptions): Configuration {
  return {
    mode: mode,
    entry: buildPaths.entry,
    output: {
      filename: "[name].[contenthash:8].js",
      chunkFilename: isDev
        ? "[name].[contenthash:8].js"
        : "[name].[contenthash:8].js",
      path: buildPaths.build,
      clean: true,
    },
    plugins: buildPlugins({
      mode,
      isDev,
      buildPaths,
      port,
    }),
    resolve: buildResolver(buildPaths),
    module: {
      rules: buildLoaders(isDev),
    },
    devServer: buildDevServer(port),
    devtool: "inline-source-map",
  };
}
