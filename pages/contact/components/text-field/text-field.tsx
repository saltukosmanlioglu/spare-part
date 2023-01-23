import React from "react";

import { TextFieldProps } from "./types";
import * as Styled from "./text-field.styled";

const TextField: React.FunctionComponent<TextFieldProps> = ({ textField }) => {
  return (
    <Styled.TextField>
      <input {...textField} />
    </Styled.TextField>
  );
};

export default TextField;
