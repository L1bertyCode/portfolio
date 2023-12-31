import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from "./LoginForm";
import {
  StoreDecorator,
  ThemeDecorator,
} from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "features/LoginForm",
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "username",
        password: "123",
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  render: () => <LoginForm />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <LoginForm />,
};

export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <LoginForm />,
};
export const withError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "username",
        password: "123",
        error: "Error",
      },
    }),
  ],
  render: () => <LoginForm />,
};
export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
  render: () => <LoginForm />,
};
