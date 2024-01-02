import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import img from "@/shared/assets/tests/storybook.jpg";
const meta: Meta<typeof Select> = {
  component: Select,
  title: "shared/Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

export const PrimaryLight: Story = {
  render: () => (
    <Select
      label={"Country"}
      options={["op1", "op2", "op3"]}
      readOnly={false}
    />
  ),
};
export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => (
    <Select
      label={"Country"}
      options={["op1", "op2", "op3"]}
      readOnly={false}
    />
  ),
};
export const PrimaryBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => (
    <Select
      label={"Country"}
      options={["op1", "op2", "op3"]}
      readOnly={false}
    />
  ),
};
export const PrimaryLightDisabled: Story = {
  render: () => (
    <Select
      label={"Country"}
      options={["op1", "op2", "op3"]}
    />
  ),
};
export const PrimaryDarkDisabled: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => (
    <Select
      label={"Country"}
      options={["op1", "op2", "op3"]}
    />
  ),
};
export const PrimaryBlueDisabled: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => (
    <Select
      label={"Country"}
      options={["op1", "op2", "op3"]}
    />
  ),
};
