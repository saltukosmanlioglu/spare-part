import React from "react";
import { NextPage } from "next";

import MainLayout from "@/layout/main";

import Percentages from "./widgets/percentages";

import * as Styled from "./us.styled";

const Us: NextPage = () => {
  return (
    <MainLayout
      breadcrumb={{
        data: [{ text: "About - Us" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <Styled.Us>
        <Percentages />
      </Styled.Us>
    </MainLayout>
  );
};

export default Us;
