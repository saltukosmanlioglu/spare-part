import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const OurTeam: NextPage = () => {
  return (
    <DynamicMainLayout
      breadcrumb={{
        data: [
          { text: "About - Our Team" },
        ],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <div></div>
    </DynamicMainLayout>
  );
};

export default OurTeam;
