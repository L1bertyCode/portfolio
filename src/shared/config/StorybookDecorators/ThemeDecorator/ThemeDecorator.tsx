import {
  Theme,
  ThemeProvider,
} from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import { StoryFn } from "@storybook/react";

export const ThemeDecorator =
  (theme: Theme) => (Story: StoryFn) => {
    return (
      <div className={`app ${theme}`}>
        <ThemeProvider initialTheme={theme}>
          <Story />
        </ThemeProvider>
      </div>
    );
  };
