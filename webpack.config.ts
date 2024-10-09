import path from "path";
import { Configuration, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = (env: any): Configuration => {
  const mode = env.mode || "development";
  return {
    mode: mode,
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
    new ProgressPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};
export default config;