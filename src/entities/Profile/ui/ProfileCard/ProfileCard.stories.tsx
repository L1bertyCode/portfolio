import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard } from "./ProfileCard";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import avatar from "@/shared/assets/tests/storybook.jpg";
const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
  title: "entities/ProfileCard",
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
  render: () => (
    <ProfileCard
      userChangeData={{
        firstname: "F",
        lastname: "Ln",
        age: 20,
        currency: "EUR",
        country: "German",
        city: "Boston",
        username: "admin",
        avatar: avatar,
      }}
    />
  ),
};
export const LightIsLoading: Story = {
  render: () => <ProfileCard isLoading={true} />,
};
export const LightError: Story = {
  render: () => <ProfileCard error={"error"} />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => (
    <ProfileCard
      userChangeData={{
        firstname: "F",
        lastname: "Ln",
        age: 20,
        currency: "EUR",
        country: "German",
        city: "Boston",
        username: "admin",
        avatar: avatar,
      }}
    />
  ),
};
export const DarkIsLoading: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <ProfileCard isLoading={true} />,
};
export const DarkError: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <ProfileCard error={"error"} />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => (
    <ProfileCard
      userChangeData={{
        firstname: "F",
        lastname: "Ln",
        age: 20,
        currency: "EUR",
        country: "German",
        city: "Boston",
        username: "admin",
        avatar: avatar,
      }}
    />
  ),
};
export const BlueIsLoading: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <ProfileCard isLoading={true} />,
};
export const BlueError: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <ProfileCard error={"error"} />,
};
