import type { Meta, StoryObj } from "@storybook/react";
import InputLabel from "./InputLabel";
import "./InputLabel.scss";

const meta: Meta<typeof InputLabel> = {
  title: "components/InputLabel",
  component: InputLabel,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["extra-small", "medium", "large", "extra-large"],
    },
    iconType: {
      control: "radio",
      options: ["error", "info"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof InputLabel>;

export const Primary: Story = {
  args: {
    text: "Email",
    size: "medium",
    iconType: "info",
  },
};
