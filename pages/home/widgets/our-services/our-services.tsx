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
          description="Müşterilerimizin ihtiyaçlarına yönelik etkili ve doğru çözümler sunmak."
          href="/home"
          child={<b>01</b>}
          title="Tedarik"
        />
        <ServiceCard
          description="Ürünlerimizin stoklanmasında, paketlenmesinde ve gönderim aşamasında kaliteli hizmet."
          href="/home"
          child={<b>02</b>}
          title="Depolama"
        />
        <ServiceCard
          description="Tecrübe sahibi ekibimizle tüm dünyaya güvenilir ve hızlı teslimatı sağlamak."
          href="/home"
          child={<b>03</b>}
          title="Lojistik"
        />
        <ServiceCard
          description="Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat."
          href="/home"
          child={<b>04</b>}
          title="Gümrükleme"
        />
        <div>
          <Image alt="" fill src="/images/home/our-services.jpg" />
        </div>
      </Styled.Wrapper>
    </Section>
  );
};

export default OurServices;
