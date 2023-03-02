import React from "react";
import Image from "next/image";

import { useLanguage } from "@/utils/hooks";

import { informationEn, informationTr } from "./lang";
import * as Styled from "./information.styled";

const Information: React.FunctionComponent = () => {
  const { lang } = useLanguage(informationTr, informationEn);

  return (
    <Styled.Information>
      <Styled.Wrapper>
        <Styled.AboutFirm>{lang.us}</Styled.AboutFirm>
        <Styled.Logo>
          <Styled.Border>
            <Image
              alt="Auto De Part"
              fill
              src="/images/logo/auto-depart-logo-1.png"
            />
          </Styled.Border>
        </Styled.Logo>
      </Styled.Wrapper>
    </Styled.Information>
  );
};

export default Information;
