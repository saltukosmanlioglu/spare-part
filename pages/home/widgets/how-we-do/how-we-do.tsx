import React from "react";
import { FaRegHandshake, FaWarehouse } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { HiDocumentCheck } from "react-icons/hi2";
import { ImTruck } from "react-icons/im";

import Section from "@/components/section";
import { useLanguage } from "@/utils/hooks";

import { howWeDoEn, howWeDoTr } from "./lang";
import * as Styled from "./how-we-do.styled";
import { AiOutlineArrowRight } from "react-icons/ai";

const HowWeDo: React.FunctionComponent = () => {
  const { lang } = useLanguage(howWeDoTr, howWeDoEn);

  return (
    <Section
      background="#fff url('/images/home/dots.png')"
      description={lang.title}
      mPadding="20px"
      padding="80px 120px"
      title={lang.title}
    >
      <Styled.Wrapper>
        <Styled.Circle>
          <div>
            <FaRegHandshake color="#fff" size={70} />
          </div>
          <b>{lang.sales}</b>
        </Styled.Circle>
        <Styled.Circle>
          <div>
            <GoPackage color="#fff" size={70} />
          </div>
          <b>{lang.procurement}</b>
        </Styled.Circle>
        <Styled.Circle>
          <div>
            <FaWarehouse color="#fff" size={70} />
          </div>
          <b>{lang.storage}</b>
        </Styled.Circle>
        <Styled.Circle>
          <div>
            <ImTruck color="#fff" size={70} />
          </div>
          <b>{lang.logistics}</b>
        </Styled.Circle>
        <Styled.Circle>
          <div>
            <HiDocumentCheck color="#fff" size={70} />
          </div>
          <b>{lang.custom}</b>
        </Styled.Circle>
      </Styled.Wrapper>
    </Section>
  );
};

export default HowWeDo;
