import React from "react";

import { TextAreaProps } from "./types";
import * as Styled from "./text-area.styled";

const TextArea: React.FunctionComponent<TextAreaProps> = ({ textArea }) => {
  return (
    <Styled.TextArea>
      <textarea {...textArea} />
    </Styled.TextArea>
  );
};

export default TextArea;
