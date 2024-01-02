import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import img from "@/shared/assets/tests/storybook.jpg";
const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "shared/Avatar",
  decorators: [
    (Story) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const PrimaryM: Story = {
  render: () => <Avatar src={img} />,
};
export const PrimaryS: Story = {
  render: () => <Avatar src={img} size="s" />,
};
export const PrimaryL: Story = {
  render: () => <Avatar src={img} size="l" />,
};
export const PrimaryMDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Avatar src={img} />,
};
export const PrimarySDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Avatar src={img} size="s" />,
};
export const PrimaryLDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Avatar src={img} size="l" />,
};
export const PrimaryMBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Avatar src={img} />,
};
export const PrimarySBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Avatar src={img} size="s" />,
};
export const PrimaryLBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Avatar src={img} size="l" />,
};
