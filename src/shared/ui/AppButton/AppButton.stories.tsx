import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "./AppButton";

const meta: Meta<typeof AppButton> = {
  component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Clear: Story = {
  render: () => <AppButton>AppButton</AppButton>,
};
