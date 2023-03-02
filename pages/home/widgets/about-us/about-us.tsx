import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import CountUp from "react-countup";

import Frame from "@/components/frame";
import { useLanguage } from "@/utils/hooks";

import { aboutUsEn, aboutUsTr } from "./lang";
import * as Styled from "./about-us.styled";

const AboutUs: React.FunctionComponent = () => {
  const { lang } = useLanguage(aboutUsTr, aboutUsEn);

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
          {lang.us}
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
