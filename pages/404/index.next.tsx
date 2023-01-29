import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const NotFound: NextPage = () => {
  return (
    <DynamicMainLayout>
      <div></div>
    </DynamicMainLayout>
  );
};

export default NotFound;
