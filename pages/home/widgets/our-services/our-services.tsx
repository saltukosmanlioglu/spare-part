import React from "react";
import Image from "next/image";

import Section from "@/components/section";
import ServiceCard from "@/components/service-card";
import { useLanguage } from "@/utils/hooks";

import { ourServicesEn, ourServicesTr } from "./lang";
import * as Styled from "./our-services.styled";

const OurServices: React.FunctionComponent = () => {
  const { lang } = useLanguage(ourServicesTr, ourServicesEn);

  return (
    <Section
      background="#f8f4f3"
      description={lang.title}
      mPadding="80px 0"
      padding="80px 120px"
      title={lang.title}
    >
      <Styled.Wrapper>
        <ServiceCard
          description={lang.procurementDesc}
          child={<b>01</b>}
          title={lang.procurement}
        />
        <ServiceCard
          description={lang.storageDesc}
          child={<b>02</b>}
          title={lang.storage}
        />
        <ServiceCard
          description={lang.logisticsDesc}
          child={<b>03</b>}
          title={lang.logistics}
        />
        <ServiceCard
          description={lang.customDesc}
          child={<b>04</b>}
          title={lang.custom}
        />
        <div>
          <Image alt="" fill src="/images/home/our-services.jpg" />
        </div>
      </Styled.Wrapper>
    </Section>
  );
};

export default OurServices;
