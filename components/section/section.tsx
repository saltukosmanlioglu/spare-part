import React from "react";

import { SectionProps } from "./types";
import * as Styled from "./section.styled";

const Section: React.FunctionComponent<SectionProps> = ({
  background,
  children,
  description,
  mPadding,
  padding,
  title,
}) => {
  return (
    <Styled.Section
      background={background}
      mPadding={mPadding}
      padding={padding}
    >
      <div>
        <p>{description}</p>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </Styled.Section>
  );
};

export default Section;
