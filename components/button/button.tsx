import React from "react";
import { ImSpinner9 } from "react-icons/im";

import { ButtonProps } from "./types";
import * as Styled from "./button.styled";

const Button: React.FunctionComponent<ButtonProps> = ({
  isLoading,
  onClick,
  text,
  type = "button",
}) => {
  return (
    <Styled.Button onClick={onClick} type={type}>
      {isLoading ? <ImSpinner9 size={24} /> : <p>{text}</p>}
    </Styled.Button>
  );
};

export default Button;
