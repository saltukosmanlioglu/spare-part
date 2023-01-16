import React from "react";

import { SectionProps } from "./types";
import * as Styled from "./section.styled";

const Section: React.FunctionComponent<SectionProps> = ({
  children,
  description,
  title,
}) => {
  return (
    <Styled.Section>
      <div>
        <p>{description}</p>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </Styled.Section>
  );
};

export default Section;
