import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "shared/Text",
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TitleAndText: Story = {
  render: () => <Text title="title" text="text" />,
};

export const onlyTitle: Story = {
  render: () => <Text title="title" />,
};

export const onlyText: Story = {
  render: () => <Text text="text" />,
};
export const TitleAndTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Text title="title" text="text" />,
};

export const onlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Text title="title" />,
};

export const onlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Text text="text" />,
};
export const TitleAndTextBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Text title="title" text="text" />,
};

export const onlyTitleBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Text title="title" />,
};

export const onlyTextBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Text text="text" />,
};
export const TitleAndTextError: Story = {
  render: () => (
    <Text title="title" text="text" colorType={"error"} />
  ),
};

export const onlyTitleErrorBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Text title="title" colorType={"error"} />,
};

export const onlyTextErrorDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Text text="text" colorType={"error"} />,
};
