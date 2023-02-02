import React from "react";
import Image from "next/image";

import ServiceCard from "@/components/service-card";

import { purposes } from "./constants";
import * as Styled from "./purpose.styled";

const Puspose: React.FunctionComponent = () => {
  return (
    <Styled.Purpose>
      <Styled.Wrapper>
        {purposes.map((purpose, index) => (
          <div key={index}>
            <Image alt="Misyon - Auto RAR" fill src={purpose.src} />
            <ServiceCard isShadow {...purpose.service} />
          </div>
        ))}
      </Styled.Wrapper>
    </Styled.Purpose>
  );
};

export default Puspose;
