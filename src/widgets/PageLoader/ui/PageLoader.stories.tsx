import { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "./PageLoader";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof PageLoader> = {
  component: PageLoader,
  title: "widgets/PageLoader",
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
  render: () => <PageLoader />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <PageLoader />,
};
export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  render: () => <PageLoader />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <PageLoader />,
};
