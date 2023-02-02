import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";

import FilterBar from "@/widgets/filter-bar";
import { useLanguage } from "@/utils/hooks";

import { partners } from "./constants";
import { ourSolutionPartnersEn, ourSolutionPartnersTr } from "./lang";
import { PartnerProps } from "./types";
import * as Styled from "./our-solution-partners.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const OurSolutionPartners: NextPage = () => {
  const router = useRouter();

  const { lang } = useLanguage(ourSolutionPartnersTr, ourSolutionPartnersEn);

  return (
    <DynamicMainLayout
      breadcrumb={{
        data: [{ text: lang.breadcrumbTitle }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <Styled.OurSolutionPartners>
        <FilterBar<PartnerProps>
          categories={lang.categories}
          component={(item, index) => (
            <Styled.Value key={index}>
              <Image alt="" fill src={item.src} />
            </Styled.Value>
          )}
          data={partners}
          index={Number(router.query.index)}
          mCol={2}
        />
      </Styled.OurSolutionPartners>
    </DynamicMainLayout>
  );
};

export default OurSolutionPartners;
