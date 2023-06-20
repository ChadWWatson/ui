import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default Button;
