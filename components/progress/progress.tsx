import React from "react";

import { ProgressProps } from "./types";
import * as Styled from "./progress.styled";

const Progress: React.FunctionComponent<ProgressProps> = ({
  percent,
  title,
}) => {
  return (
    <Styled.Progress percent={percent}>
      <b>{title}</b>
      <div>
        <div aria-valuetext={`${percent}%`} />
      </div>
    </Styled.Progress>
  );
};

export default Progress;
