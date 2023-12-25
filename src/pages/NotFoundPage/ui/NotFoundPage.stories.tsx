import type { Meta, StoryObj } from "@storybook/react";

import NotFoundPage from "./NotFoundPage";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof NotFoundPage> = {
  component: NotFoundPage,
  title: "pages/NotFoundPage",
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  render: () => <NotFoundPage />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <NotFoundPage />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <NotFoundPage />,
};
