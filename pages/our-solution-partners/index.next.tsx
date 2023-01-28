import React from "react";
import { NextPage } from "next";
import Image from "next/image";

import MainLayout from "@/layout/main";
import FilterBar from "@/widgets/filter-bar";

import { categories, partners } from "./constants";
import { PartnerProps } from "./types";
import * as Styled from "./our-solution-partners.styled";

const OurSolutionPartners: NextPage = () => {
  return (
    <MainLayout
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
        />
      </Styled.OurSolutionPartners>
    </MainLayout>
  );
};

export default OurSolutionPartners;
