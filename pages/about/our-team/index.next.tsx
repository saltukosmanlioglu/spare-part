import React from "react";
import { NextPage } from "next";

import MainLayout from "@/layout/main";

const OurTeam: NextPage = () => {
  return (
    <MainLayout
      breadcrumb={{
        data: [
          { text: "About - Our Team" },
        ],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <div></div>
    </MainLayout>
  );
};

export default OurTeam;
