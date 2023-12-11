import type { StorybookConfig } from "@storybook/react-webpack5";
import {
  Configuration,
  DefinePlugin,
  ProvidePlugin,
} from "webpack";
import path from "path";
import { BuildPaths } from "../config/build/types/config";
import { buildScssLoader } from "../config/build/loaders/buildScssLoader";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: Configuration) => {
    const paths: BuildPaths = {
      build: "",
      html: "",
      favicon: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.module?.rules?.push(buildScssLoader(true));
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      "@": paths.src,
    };

    // if (config?.module?.rules) {
    //   const imageRule = config.module?.rules?.find(
    //     (rule) => {
    //       if (
    //         typeof rule !== "string" &&
    //         rule.test instanceof RegExp
    //       ) {
    //         return rule.test.test(".svg");
    //       }
    //     }
    //   );

    //   if (imageRule && typeof imageRule !== "string") {
    //     imageRule.exclude = /\.svg$/;
    //   }
    //   config.module?.rules?.push({
    //     test: /\.svg$/,
    //     use: ["@svgr/webpack"],
    //   });
    // }

    config.plugins?.push(
      new DefinePlugin({
        __IS__DEV__: JSON.stringify(true),
        __API__: JSON.stringify("http://testapi.com"),
        __PROJECT__: JSON.stringify("storybook"),
      }),
      new ProvidePlugin({
        React: "react",
      })
    );
    return config;
  },
};
export default config;
