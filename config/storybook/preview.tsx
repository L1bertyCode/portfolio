import type { Preview } from "@storybook/react";
import {
  RouteDecorator,
  StoreDecorator,
  StyleDecorator,
  ThemeDecorator,
} from "../../src/shared/config/StorybookDecorators";
import { Theme } from "../../src/app/providers/ThemeProvider/ui/ThemeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    RouteDecorator,
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({}),
  ],
};

export default preview;
