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
  decorators: [(Story: StoryFn) => <div></div>],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  render: () => <ThemeSwitcher />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <ThemeSwitcher />,
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  render: () => <ThemeSwitcher />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <ThemeSwitcher />,
};
