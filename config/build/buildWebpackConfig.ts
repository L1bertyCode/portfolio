import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildResolver } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  buildOptions: BuildOptions
): Configuration {
  const { mode, isDev, buildPaths, port, apiUrl } =
    buildOptions;
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
    plugins: buildPlugins(buildOptions),
    resolve: buildResolver(buildPaths),
    module: {
      rules: buildLoaders(isDev),
    },
    devServer: buildDevServer(port),
    devtool: isDev ? "inline-source-map" : undefined,
  };
}
