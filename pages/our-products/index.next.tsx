import React from "react";
import { NextPage } from "next";

import MainLayout from "@/layout/main";

const OurProducts: NextPage = () => {
  return (
    <MainLayout
      breadcrumb={{
        data: [{ text: "Our Products" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <div></div>
    </MainLayout>
  );
};

export default OurProducts;
