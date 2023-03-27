import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const NotFound: NextPage = () => {
  return (
    <DynamicMainLayout pageTitle="Sayfa Bulunamadı | Auto De Part">
      <div></div>
    </DynamicMainLayout>
  );
};

export default NotFound;
