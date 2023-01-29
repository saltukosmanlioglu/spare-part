import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";

import FilterBar from "@/widgets/filter-bar";

import { categories, partners } from "./constants";
import { PartnerProps } from "./types";
import * as Styled from "./our-solution-partners.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const OurSolutionPartners: NextPage = () => {
  return (
    <DynamicMainLayout
      breadcrumb={{
        data: [{ text: "Our Solution Partners" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <Styled.OurSolutionPartners>
        <FilterBar<PartnerProps>
          categories={categories}
          component={(item, index) => (
            <Styled.Value key={index}>
              <Image alt="" fill src={item.src} />
            </Styled.Value>
          )}
          data={partners}
          mCol={2}
        />
      </Styled.OurSolutionPartners>
    </DynamicMainLayout>
  );
};

export default OurSolutionPartners;
