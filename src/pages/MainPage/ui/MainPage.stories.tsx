import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "./MainPage";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof MainPage> = {
  component: MainPage,
  title: "pages/MainPage",
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  render: () => <MainPage />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <MainPage />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <MainPage />,
};
