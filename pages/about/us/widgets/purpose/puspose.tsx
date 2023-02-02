import React from "react";
import Image from "next/image";

import ServiceCard from "@/components/service-card";
import { useLanguage } from "@/utils/hooks";

import { purposeEn, purposeTr } from "./lang";
import * as Styled from "./purpose.styled";

const Puspose: React.FunctionComponent = () => {
  const { lang } = useLanguage(purposeTr, purposeEn);

  return (
    <Styled.Purpose>
      <Styled.Wrapper>
        {lang.purposes.map((purpose, index) => (
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
