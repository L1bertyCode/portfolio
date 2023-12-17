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

export const InvertedClear: Story = {
  render: () => <Button variant="clear">Text</Button>,
};
export const InvertedOuline: Story = {
  render: () => <Button variant="outline">Text</Button>,
};
export const InvertedOulineOrange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  render: () => <Button variant="outline">Text</Button>,
};
