import type { Preview } from "@storybook/react";
import {
  RouteDecorator,
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
  ],
};

export default preview;
