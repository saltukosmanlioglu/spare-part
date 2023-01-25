import React from "react";
import { NextPage } from "next";

import MainLayout from "@/layout/main";

const Us: NextPage = () => {
  return (
    <MainLayout
      breadcrumb={{
        data: [{ text: "About - Us" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <div></div>
    </MainLayout>
  );
};

export default Us;
