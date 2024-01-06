import type {
  Meta,
  StoryFn,
  StoryObj,
} from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  title: "features/ThemeSwitcher",
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  render: () => (
    <div
      style={{
        background: "black",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeSwitcher />
    </div>
  ),
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => (
    <div
      style={{
        background: "#fcfcfc",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeSwitcher />
    </div>
  ),
};

export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => (
    <div
      style={{
        background: "#fcfcfc",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeSwitcher />
    </div>
  ),
};
