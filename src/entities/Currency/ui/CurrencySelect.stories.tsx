import type { Meta, StoryObj } from "@storybook/react";

import { CurrencySelect } from "./CurrencySelect";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof CurrencySelect> = {
  component: CurrencySelect,
  title: "entities/CurrencySelect",
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const PrimaryLight: Story = {
  render: () => <CurrencySelect readOnly={false} />,
};
export const PrimaryDark: Story = {
  render: () => <CurrencySelect readOnly={false} />,
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const PrimaryBlue: Story = {
  render: () => <CurrencySelect readOnly={false} />,
  decorators: [ThemeDecorator(Theme.BLUE)],
};
export const PrimaryLightReadOnly: Story = {
  render: () => <CurrencySelect />,
};
export const PrimaryDarkReadOnly: Story = {
  render: () => <CurrencySelect />,
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const PrimaryBlueReadOnly: Story = {
  render: () => <CurrencySelect />,
  decorators: [ThemeDecorator(Theme.BLUE)],
};
