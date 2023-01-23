import { NextPage } from "next";

import MainLayout from "@/layout/main";

import AboutUs from "./widgets/about-us";
import OurEmployees from "./widgets/our-employees";
import OurServices from "./widgets/our-services";
import OurPartners from "./widgets/our-partners";

const Home: NextPage = () => (
  <MainLayout
    breadcrumb={{
      data: [{ text: "About Us" }],
    }}
  >
    <AboutUs />
    <OurServices />
    <OurPartners />
    <OurEmployees />
  </MainLayout>
);

export default Home;
