import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "widgets/Sidebar",
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  render: () => <Sidebar />,
};

// export const InvertedOulineOrange: Story = {
//   decorators: [ThemeDecorator(Theme.ORANGE)],
//   render: () => (
//     <AppButton variant="outline-inverted">Text</AppButton>
//   ),
// };
