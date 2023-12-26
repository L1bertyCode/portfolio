import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "./ProfilePage";
import { StoreDecorator, ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  title: "pages/ProfilePage",
  decorators:[StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  render: () => <ProfilePage />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <ProfilePage />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <ProfilePage />,
};
