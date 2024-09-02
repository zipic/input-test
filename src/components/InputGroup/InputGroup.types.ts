export interface InputGroupProps {
  labelText: string;
  labelSize: "extra-small" | "medium" | "large" | "extra-large";
  iconType?: "error" | "info";
  htmlFor: string;
  placeholder: string;
  textSize: "extra-small" | "medium" | "large" | "extra-large";
  textArea?: "error" | "disabled" | "deffault";
  annotationText: string;
  annotationSize: "extra-small" | "medium" | "large" | "extra-large";
  annotationError: "string" | "deffault";
  theme: "light" | "dark";
}
