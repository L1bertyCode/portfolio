import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { buildScssLoader } from "./loaders/buildScssLoader";

export function buildLoaders(
  isDev: boolean
): RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["en", "ru"],
              keyAsDefaultValue: true,
            },
          ],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const scssLoader = buildScssLoader(isDev);
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const fileLoader = {
    test: /\.(png|jpeg|jpg|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  return [
    fileLoader,
    babelLoader,
    tsLoader,
    scssLoader,
    svgLoader,
  ];
}
