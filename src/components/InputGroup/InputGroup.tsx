import React from "react";
import { InputGroupProps } from "./InputGroup.types";
import InputLabel from "../InputLabel/InputLabel";
import InputText from "../InputText/InputText";
import InputAnnotation from "../InputAnnotation/InputAnnotation";

const InputGroup: React.FC<InputGroupProps> = ({
  labelText,
  labelSize,
  iconType,
  htmlFor,
  placeholder,
  textSize,
  textArea,
  annotationText,
  annotationSize,
  annotationError,
  theme = "light",
}) => {
  return (
    <div className={`input-group-${theme}`}>
      <InputLabel
        text={labelText}
        size={labelSize}
        iconType={iconType}
        htmlFor={htmlFor}
        theme={theme}
      />
      <InputText
        placeholder={placeholder}
        size={textSize}
        textArea={textArea}
        theme={theme}
      />
      <InputAnnotation
        text={annotationText}
        size={annotationSize}
        error={annotationError}
        theme={theme}
      />
    </div>
  );
};

export default InputGroup;
