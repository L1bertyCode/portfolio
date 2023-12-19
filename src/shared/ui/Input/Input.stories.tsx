import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "shared/Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  render: () => <Input label={"Username"} />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Input label={"Username"} />,
};


export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Input label={"Username"} />,
};
