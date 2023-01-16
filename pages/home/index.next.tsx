import { NextPage } from "next";

import MainLayout from "@/layout/main";

const home: NextPage = () => (
  <MainLayout breadcrumb={{ data: [{ text: "About Us" }] }}>
    <div></div>
  </MainLayout>
);

export default home;
