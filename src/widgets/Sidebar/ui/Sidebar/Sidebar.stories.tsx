import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import {
  StoreDecorator,
  ThemeDecorator,
} from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "widgets/Sidebar",
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const LightNoAuth: Story = {
  render: () => <Sidebar />,
};

export const DarkNoAuth: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Sidebar />,
};
export const BlueNoAuth: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Sidebar />,
};

export const Light: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],

  render: () => <Sidebar />,
};

export const Dark: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
  render: () => <Sidebar />,
};
export const Blue: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
    ThemeDecorator(Theme.BLUE),
  ],
  render: () => <Sidebar />,
};
