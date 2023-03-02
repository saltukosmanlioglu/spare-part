import React from "react";
import { GoPackage } from "react-icons/go";

import Section from "@/components/section";

import * as Styled from "./how-we-do.styled";
import { ImTruck } from "react-icons/im";
import { FaRegHandshake, FaWarehouse } from "react-icons/fa";
import { HiDocumentCheck } from "react-icons/hi2";

const HowWeDo: React.FunctionComponent = () => {
  return (
    <Section
      background="#fff url('/images/home/dots.png')"
      description="How we do"
      mPadding="20px"
      padding="80px 120px"
      title="How We Do ?"
    >
      <Styled.Wrapper>
        <Styled.Circle>
          <div>
            <FaRegHandshake color="#fff" size={70} />
          </div>
          <b>Satış</b>
        </Styled.Circle>
        <Styled.Circle>
          <div>
            <GoPackage color="#fff" size={70} />
          </div>
          <b>Tedarik</b>
        </Styled.Circle>
        <Styled.Circle>
          <div>
            <FaWarehouse color="#fff" size={70} />
          </div>
          <b>Depolama</b>
        </Styled.Circle>
        <Styled.Circle>
          <div>
            <ImTruck color="#fff" size={70} />
          </div>
          <b>Lojistik</b>
        </Styled.Circle>
        <Styled.Circle>
          <div>
            <HiDocumentCheck color="#fff" size={70} />
          </div>
          <b>Gümrük</b>
        </Styled.Circle>
      </Styled.Wrapper>
    </Section>
  );
};

export default HowWeDo;
