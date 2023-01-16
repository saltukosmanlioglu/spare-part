import { NextPage } from "next";

import MainLayout from "@/layout/main";

import AboutUs from "./widgets/about-us";
import OurEmployees from "./widgets/our-employees";
import OurServices from "./widgets/our-services";

const Home: NextPage = () => (
  <MainLayout
    breadcrumb={{
      data: [{ text: "About Us" }],
    }}
  >
    <AboutUs />
    <OurServices />
    <OurEmployees />
  </MainLayout>
);

export default Home;
