import type { Meta, StoryObj } from "@storybook/react";

import { CountrySelect } from "./CountrySelect";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof CountrySelect> = {
  component: CountrySelect,
  title: "entities/CountrySelect",
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const PrimaryLight: Story = {
  render: () => <CountrySelect readOnly={false} />,
};
export const PrimaryDark: Story = {
  render: () => <CountrySelect readOnly={false} />,
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const PrimaryBlue: Story = {
  render: () => <CountrySelect readOnly={false} />,
  decorators: [ThemeDecorator(Theme.BLUE)],
};
export const PrimaryLightReadOnly: Story = {
  render: () => <CountrySelect />,
};
export const PrimaryDarkReadOnly: Story = {
  render: () => <CountrySelect />,
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const PrimaryBlueReadOnly: Story = {
  render: () => <CountrySelect />,
  decorators: [ThemeDecorator(Theme.BLUE)],
};
