import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import CountUp from "react-countup";

import Frame from "@/components/frame";

import * as Styled from "./about-us.styled";

const AboutUs: React.FunctionComponent = () => {
  return (
    <Styled.AboutUs>
      <Styled.Wrapper>
        <div>
          <Frame />
        </div>
        <Styled.Information>
          <div>
            <AiOutlineMinus color="#b19777" size={28} />
            <b>ABOUT US</b>
          </div>
          <h3>
            Best Designers <br /> Architectures for You.
          </h3>
          <p>
            Architecture bibendum pharetra eleifend. Suspendisse vel volutpat
            purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec
            condimentum ipsum consequat. Mauris vitae consequat nibh, vitae
            interdum mi.
          </p>
          <Styled.Counts>
            <div>
              <h1>
                <CountUp duration={1.5} end={352} />
              </h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div>
              <h1>
                <CountUp duration={1.5} end={567} />
              </h1>
              <p>SATISFIED CLIENT</p>
            </div>
            <div>
              <h1>
                <CountUp duration={1.5} end={17} />
              </h1>
              <p>AWARDS WON</p>
            </div>
          </Styled.Counts>
        </Styled.Information>
      </Styled.Wrapper>
    </Styled.AboutUs>
  );
};

export default AboutUs;
