import { NextPage } from "next";

import MainLayout from "@/layout/main";

import OurServices from "./widgets/our-services";

const Home: NextPage = () => (
  <MainLayout breadcrumb={{ data: [{ text: "About Us" }] }}>
    <OurServices />
  </MainLayout>
);

export default Home;
