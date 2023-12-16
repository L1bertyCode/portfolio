import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "./AppButton";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  title: "shared/AppButton",
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const InvertedClear: Story = {
  render: () => <AppButton variant="clear">Text</AppButton>,
};
export const InvertedOuline: Story = {
  render: () => (
    <AppButton variant="outline">Text</AppButton>
  ),
};
export const InvertedOulineOrange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  render: () => (
    <AppButton variant="outline">Text</AppButton>
  ),
};
