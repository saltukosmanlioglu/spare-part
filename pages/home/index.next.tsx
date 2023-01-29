import { NextPage } from "next";

import MainLayout from "@/layout/main";

import AboutUs from "./widgets/about-us";
import HowWeDo from "./widgets/how-we-do";
import OurEmployees from "./widgets/our-employees";
import OurPartners from "./widgets/our-partners";
import OurServices from "./widgets/our-services";

const Home: NextPage = () => (
  <MainLayout>
    <AboutUs />
    <OurServices />
    <HowWeDo />
    <OurPartners />
    <OurEmployees />
  </MainLayout>
);

export default Home;
