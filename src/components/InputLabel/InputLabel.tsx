import { InputLabelProps } from "./InputLabel.types";

const InputLabel: React.FC<InputLabelProps> = ({
  text,
  size,
  htmlFor,
  iconType,
  theme = "light",
}) => {
  return (
    <label
      className={`input-label input-label--${size} input-label--${theme}`}
      htmlFor={htmlFor}
    >
      <span className="input-label-text">{text}</span>
      {iconType !== "info" ? (
        <span className={`icon ${iconType}`}></span>
      ) : (
        <img src="/icons/info1.svg" alt="info" className="icon" />
      )}
    </label>
  );
};

export default InputLabel;
