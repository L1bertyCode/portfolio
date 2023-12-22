import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import {
  StoreDecorator,
  ThemeDecorator,
} from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "widgets/Navbar",
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  decorators: [StoreDecorator({})],
  render: () => <Navbar />,
};

export const Dark: Story = {
  decorators: [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
  ],
  render: () => <Navbar />,
};
export const Blue: Story = {
  decorators: [
    StoreDecorator({}),
    ThemeDecorator(Theme.BLUE),
  ],
  render: () => <Navbar />,
};
export const AuthLight: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
  render: () => <Navbar />,
};

export const AuthDark: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
  render: () => <Navbar />,
};
export const AuthBlue: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
    ThemeDecorator(Theme.BLUE),
  ],
  render: () => <Navbar />,
};
