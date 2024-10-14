import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    }
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            namedExport: false,
            exportLocalsConvention: 'as-is',
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      }, ,
      "sass-loader",
    ],
  };
  return [
    tsLoader,
    babelLoader,
    scssLoader
  ];
};