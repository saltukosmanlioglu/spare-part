import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));
const DynamicMainSlick = dynamic(() => import("@/widgets/main-slick"));

const DynamicAboutUs = dynamic(() => import("./widgets/about-us"));
const DynamicHowWeDo = dynamic(() => import("./widgets/how-we-do"));
const DynamicOurEmployees = dynamic(() => import("./widgets/our-employees"));
const DynamicOurPartners = dynamic(() => import("./widgets/our-partners"));
const DynamicOurServices = dynamic(() => import("./widgets/our-services"));

const Home: NextPage = () => (
  <DynamicMainLayout pageTitle="Auto De Part">
    <DynamicMainSlick />
    <DynamicAboutUs />
    <DynamicOurServices />
    <DynamicHowWeDo />
    <DynamicOurPartners />
    <DynamicOurEmployees />
  </DynamicMainLayout>
);

export default Home;
