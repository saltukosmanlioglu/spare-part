import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import Percentages from "./widgets/percentages";

import * as Styled from "./us.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const Us: NextPage = () => {
  return (
    <DynamicMainLayout
      breadcrumb={{
        data: [{ text: "About - Us" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <Styled.Us>
        <Percentages />
      </Styled.Us>
    </DynamicMainLayout>
  );
};

export default Us;
