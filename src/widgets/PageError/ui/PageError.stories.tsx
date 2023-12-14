import { Meta, StoryObj } from "@storybook/react";
import { PageError } from "./PageError";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof PageError> = {
  component: PageError,
  title: "widgets/PageError",
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {

  render: () => <PageError />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <PageError />,
};
