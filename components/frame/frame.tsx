import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

import { FrameProps } from "./types";
import * as Styled from "./frame.styled";

const Frame: React.FunctionComponent<FrameProps> = () => {
  return (
    <Styled.Frame>
      <Styled.Background>
        <b>
          SINCE <br /> 2014
        </b>
        <div>
          <p>
            <CountUp duration={1.5} end={21} />
          </p>
          <b>YEARS EXPERIENCE</b>
        </div>
      </Styled.Background>
      <Image alt="" fill src="/images/home/about-us.jpg" />
    </Styled.Frame>
  );
};

export default Frame;
