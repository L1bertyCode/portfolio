import type { Meta, StoryObj } from "@storybook/react";

import AboutPage from "./AboutPage";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof AboutPage> = {
  component: AboutPage,
  title: "pages/AboutPage",
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  render: () => <AboutPage />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <AboutPage />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <AboutPage />,
};
