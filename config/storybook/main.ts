import type { StorybookConfig } from "@storybook/react-webpack5";
import {
  Configuration,
  DefinePlugin,
  ProvidePlugin,
} from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildScssLoader } from "../build/loaders/buildScssLoader";

const config: StorybookConfig = {
  stories: [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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
    const buildPaths: BuildPaths = {
      build: "",
      html: "",
      favicon: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve?.extensions?.push(".ts", ".tsx");
    config!.resolve?.modules?.push(buildPaths.src);
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      "@": buildPaths.src,
    };

    config.module?.rules?.push(buildScssLoader(true));

    
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test(".svg");
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
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
