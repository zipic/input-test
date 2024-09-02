import { Meta, StoryObj } from "@storybook/react/*";
import InputAnnotation from "./InputAnnotation";
import "./InputAnnotation.scss";

const meta: Meta<typeof InputAnnotation> = {
  title: "components/InputAnnotation",
  component: InputAnnotation,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["extra-small", "medium", "large", "extra-large"],
    },
    error: {
      control: "radio",
      options: ["error", "deffault"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputAnnotation>;
export const Primary: Story = {
  args: {
    text: "This is a hint text to help user.",
    size: "medium",
    error: "deffault",
  },
};
