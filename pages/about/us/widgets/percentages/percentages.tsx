import React from "react";

import Progress from "@/components/progress";

import * as Styled from "./percentages.styled";

const Percentages: React.FunctionComponent = () => {
  return (
    <Styled.Percentages>
      <Styled.Wrapper>
        <Styled.Progress>
          <Progress percent={90} title="ARCHITECTURE" />
          <Progress percent={75} title="INTERIOR DESIGN" />
          <Progress percent={80} title="3D MODELING" />
        </Styled.Progress>
        <Styled.Information>
          <h3>Providing Customized Design Solutions That Fits Every Space.</h3>
          <p>
            Beyond more stoic this along goodness hey this this wow ipsum manate
            far impressive manifest farcrud opened inside.
          </p>
          <p>
            Fustered impressive manifest crud opened inside owing punitively
            around forewent and after wasteful telling sprang coldly and spoke
            less clients.
          </p>
        </Styled.Information>
      </Styled.Wrapper>
    </Styled.Percentages>
  );
};

export default Percentages;
