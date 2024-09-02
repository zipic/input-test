import { useState } from "react";
import { InputTextProps } from "./InputText.types";

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  size,
  textArea,
  theme = "light",
}) => {
  const [text, setText] = useState("");

  const handlerText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div className="input-wrapper">
      <img
        className={`search ${textArea === "error" ? "search-error" : ""}`}
        src="/icons/search.svg"
        alt="search"
      />
      <input
        className={`input input-${size}-${textArea} input-${theme} `}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handlerText}
        disabled={textArea === "disabled"}
        style={{ display: "flex" }}
      />
      <img
        className={`help ${textArea === "error" ? "help-error" : ""}`}
        src="/icons/help.svg"
        alt="question"
      />
      <img
        className={`add ${textArea === "error" ? "add-error" : ""}`}
        src="/icons/shortkey.svg"
        alt="add"
      />
    </div>
  );
};

export default InputText;
