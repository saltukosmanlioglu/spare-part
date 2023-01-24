import { NextPage } from "next";

import MainLayout from "@/layout/main";

import AboutUs from "./widgets/about-us";
import OurEmployees from "./widgets/our-employees";
import OurPartners from "./widgets/our-partners";
import OurServices from "./widgets/our-services";
import Stages from "./widgets/stages";

const Home: NextPage = () => (
  <MainLayout
    breadcrumb={{
      data: [{ text: "About Us" }],
    }}
  >
    <AboutUs />
    <OurServices />
    <Stages />
    <OurPartners />
    <OurEmployees />
  </MainLayout>
);

export default Home;
