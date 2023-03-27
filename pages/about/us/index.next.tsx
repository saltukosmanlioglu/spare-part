import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import { useLanguage } from "@/utils/hooks";

import Information from "./widgets/information";
import Percentages from "./widgets/percentages";
import Purpose from "./widgets/purpose";

import { usEn, usTr } from "./lang";
import * as Styled from "./us.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const Us: NextPage = () => {
  const { lang } = useLanguage(usTr, usEn);

  return (
    <DynamicMainLayout
      breadcrumb={{
        data: [{ text: lang.breadcrumbTitle }],
        image: "/images/products/suspansiyon.jpeg",
      }}
    >
      <Styled.Us>
        <Information />
        <Purpose />
        {/* <Percentages /> */}
      </Styled.Us>
    </DynamicMainLayout>
  );
};

export default Us;
