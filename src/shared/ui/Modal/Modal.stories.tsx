import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "shared/Modal",
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  // decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Modal isOpen={true}>Some content</Modal>,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Modal isOpen={true}>Some content</Modal>,
};
