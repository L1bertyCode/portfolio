import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import { Country } from "@/shared/const/common";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "shared/Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

export const PrimaryLight: Story = {
  render: () => (
    <Select
      label={"Country"}
      options={[
        {
          value: Country.USA,
          content: Country.USA,
        },
        {
          value: Country.Canada,
          content: Country.Canada,
        },
        {
          value: Country.Ukraine,
          content: Country.Ukraine,
        },
        {
          value: Country.Russia,
          content: Country.Russia,
        },
        {
          value: Country.German,
          content: Country.German,
        },
      ]}
      readOnly={false}
    />
  ),
};
export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => (
    <Select
      label={"Country"}
      options={[
        {
          value: Country.USA,
          content: Country.USA,
        },
        {
          value: Country.Canada,
          content: Country.Canada,
        },
        {
          value: Country.Ukraine,
          content: Country.Ukraine,
        },
        {
          value: Country.Russia,
          content: Country.Russia,
        },
        {
          value: Country.German,
          content: Country.German,
        },
      ]}
      readOnly={false}
    />
  ),
};
export const PrimaryBlue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => (
    <Select
      label={"Country"}
      options={[
        {
          value: Country.USA,
          content: Country.USA,
        },
        {
          value: Country.Canada,
          content: Country.Canada,
        },
        {
          value: Country.Ukraine,
          content: Country.Ukraine,
        },
        {
          value: Country.Russia,
          content: Country.Russia,
        },
        {
          value: Country.German,
          content: Country.German,
        },
      ]}
      readOnly={false}
    />
  ),
};
export const PrimaryLightDisabled: Story = {
  render: () => (
    <Select
      label={"Country"}
      options={[
        {
          value: Country.USA,
          content: Country.USA,
        },
        {
          value: Country.Canada,
          content: Country.Canada,
        },
        {
          value: Country.Ukraine,
          content: Country.Ukraine,
        },
        {
          value: Country.Russia,
          content: Country.Russia,
        },
        {
          value: Country.German,
          content: Country.German,
        },
      ]}
    />
  ),
};
export const PrimaryDarkDisabled: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => (
    <Select
      label={"Country"}
      options={[
        {
          value: Country.USA,
          content: Country.USA,
        },
        {
          value: Country.Canada,
          content: Country.Canada,
        },
        {
          value: Country.Ukraine,
          content: Country.Ukraine,
        },
        {
          value: Country.Russia,
          content: Country.Russia,
        },
        {
          value: Country.German,
          content: Country.German,
        },
      ]}
    />
  ),
};
export const PrimaryBlueDisabled: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => (
    <Select
      label={"Country"}
      options={[
        {
          value: Country.USA,
          content: Country.USA,
        },
        {
          value: Country.Canada,
          content: Country.Canada,
        },
        {
          value: Country.Ukraine,
          content: Country.Ukraine,
        },
        {
          value: Country.Russia,
          content: Country.Russia,
        },
        {
          value: Country.German,
          content: Country.German,
        },
      ]}
    />
  ),
};
