import { Meta, StoryObj } from "@storybook/react/*";
import InputText from "./InputText";
import "./InputText.scss";

const meta: Meta<typeof InputText> = {
  title: "components/InputText",
  component: InputText,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["extra-small", "medium", "large", "extra-large"],
    },
    textArea: {
      control: "radio",
      options: ["error", "disabled", "deffault"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Primary: Story = {
  args: {
    size: "medium",
    textArea: "deffault",
    placeholder: "Input...",
  },
};
