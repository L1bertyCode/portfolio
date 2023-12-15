import HtmlWebpackPlugin from "html-webpack-plugin";
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  WebpackPluginInstance,
} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export function buildPlugins({
  mode,
  isDev,
  buildPaths,
  port,
}: BuildOptions): WebpackPluginInstance[] {
  let plugins = [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
      inject: "body",
    }),
    new DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
  if (isDev) {
    //@ts-ignore
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(
      //@ts-ignore
      new BundleAnalyzerPlugin({ openAnalyzer: false })
    );
  }

  return plugins;
}
