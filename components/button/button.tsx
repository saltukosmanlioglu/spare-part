import React from "react";

import { ButtonProps } from "./types";
import * as Styled from "./button.styled";

const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  text,
  type = "button",
}) => {
  return (
    <Styled.Button onClick={onClick} type={type}>
      <p>{text}</p>
    </Styled.Button>
  );
};

export default Button;
