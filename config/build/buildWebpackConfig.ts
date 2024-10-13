import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugis";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true
    },
    plugins: buildPlugins(options.paths),
    module: {
      rules: buildLoaders(options.isDev)
    },
    resolve: buildResolvers(options),
    devServer: options.isDev ? buildDevServer(options.port) : undefined,
    devtool: options.isDev ? "inline-source-map" : undefined
  };
};