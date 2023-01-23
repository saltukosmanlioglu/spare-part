import React from "react";
import Image from "next/image";

import Section from "@/components/section";
import ServiceCard from "@/components/service-card";

import * as Styled from "./our-services.styled";

const OurServices: React.FunctionComponent = () => {
  return (
    <Section
      background="#f8f4f3"
      description="BEST FEATURES"
      mPadding="80px 0"
      padding="80px 120px"
      title="OUR SERVICES"
    >
      <Styled.Wrapper>
        <ServiceCard
          description="Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat."
          href="/home"
          index="01"
          title="Architecture"
        />
        <ServiceCard
          description="Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat."
          href="/home"
          index="02"
          title="Interior Design"
        />
        <ServiceCard
          description="Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat."
          href="/home"
          index="03"
          title="3D Modeling"
        />
        <ServiceCard
          description="Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat."
          href="/home"
          index="04"
          title="Furniture Design"
        />
        <div>
          <Image alt="" fill src="/images/home/our-services.jpg" />
        </div>
      </Styled.Wrapper>
    </Section>
  );
};

export default OurServices;
