import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "shared/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  render: () => <Button variant="clear">Text</Button>,
};
export const Ouline: Story = {
  render: () => <Button variant="outline">Text</Button>,
};
export const Filled: Story = {
  render: () => <Button variant="filled">Text</Button>,
};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button variant="clear">Text</Button>,
};
export const OulineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button variant="outline">Text</Button>,
};
export const FilledDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button variant="filled">Text</Button>,
};
export const ClearBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Button variant="clear">Text</Button>,
};
export const OulineBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Button variant="outline">Text</Button>,
};
export const FilledBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Button variant="filled">Text</Button>,
};
export const Desabled: Story = {
  render: () => (
    <Button variant="filled" disabled={true}>
      Text
    </Button>
  ),
};
