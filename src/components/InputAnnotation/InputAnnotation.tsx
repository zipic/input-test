import React from "react";
import { InputAnnotationProps } from "./InputAnnotation.types";

const InputAnnotation: React.FC<InputAnnotationProps> = ({
  text,
  size,
  error,
  theme = "light",
}) => {
  return (
    <p
      className={`annotation annotation--${theme} annotation--${size} annotation--${error}`}
    >
      {text}
    </p>
  );
};

export default InputAnnotation;
