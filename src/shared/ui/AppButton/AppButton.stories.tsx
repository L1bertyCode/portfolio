import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "./AppButton";

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  title: "shared/AppButton",
  decorators: [
    (Story) => (
      <div className="app_dark_theme">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Clear: Story = {
  render: () => (
    <AppButton variant="clear-inverted">Text</AppButton>
  ),
};
export const Ouline: Story = {
  render: () => (
    <AppButton variant="outline-inverted">Text</AppButton>
  ),
};
