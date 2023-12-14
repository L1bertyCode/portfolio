import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "widgets/Navbar",
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  render: () => <Navbar />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Navbar />,
};
