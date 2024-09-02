import { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import "./InputGroup.scss";
import "../InputLabel/InputLabel.scss";
import "../InputText/InputText.scss";
import "../InputAnnotation/InputAnnotation.scss";

const meta: Meta<typeof InputGroup> = {
  title: "components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  argTypes: {
    labelText: {
      control: "text",
      description: "Text content for InputLabel",
      defaultValue: "Email",
    },
    labelSize: {
      control: "radio",
      options: ["extra-small", "medium", "large", "extra-large"],
      description: "Size of the InputLabel",
      defaultValue: "medium",
    },
    iconType: {
      control: "radio",
      options: ["error", "info"],
      description: "Icon type for InputLabel",
      defaultValue: "info",
    },
    htmlFor: {
      control: "text",
      description: "htmlFor attribute linking to InputText",
      defaultValue: "email",
    },

    placeholder: {
      control: "text",
      description: "Placeholder text for InputText",
      defaultValue: "Enter email",
    },
    textSize: {
      control: "radio",
      options: ["extra-small", "medium", "large", "extra-large"],
      description: "Size of the InputText",
      defaultValue: "medium",
    },
    textArea: {
      control: "radio",
      options: ["error", "deffault", "disabled"],
      description: "State of the InputText",
      defaultValue: "deffault",
    },

    annotationText: {
      control: "text",
      description: "Annotation text to help the user",
      defaultValue: "This is a hint text to help the user.",
    },
    annotationSize: {
      control: "radio",
      options: ["extra-small", "medium", "large", "extra-large"],
      description: "Size of the InputAnnotation",
      defaultValue: "medium",
    },
    annotationError: {
      control: "radio",
      options: ["error", "deffault"],
      description: "Error state for InputAnnotation",
      defaultValue: "deffault",
    },
    theme: {
      control: "radio",
      options: ["light", "dark"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {
    labelText: "Email",
    labelSize: "medium",
    iconType: "info",
    htmlFor: "email",
    placeholder: "Input...",
    textSize: "medium",
    textArea: "deffault",
    annotationText: "This is a hint text to help the user.",
    annotationSize: "medium",
    annotationError: "deffault",
    theme: "light",
  },
};
