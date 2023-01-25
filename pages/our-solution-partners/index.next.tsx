import React from "react";
import { NextPage } from "next";

import MainLayout from "@/layout/main";

const OurSolutionPartners: NextPage = () => {
  return (
    <MainLayout
      breadcrumb={{
        data: [{ text: "Our Solution Partners" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <div></div>
    </MainLayout>
  );
};

export default OurSolutionPartners;
