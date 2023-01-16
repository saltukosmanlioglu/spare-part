import React from "react";

import { CircleProps } from "./types";
import * as Styled from "./circle.styled";

const Circle: React.FunctionComponent<CircleProps> = () => {
  return (
    <Styled.Circle>
      <div>Circle</div>
    </Styled.Circle>
  );
};

export default Circle;
