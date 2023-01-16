import { NextPage } from "next";

import Section from "@/components/section";
import MainLayout from "@/layout/main";

const Home: NextPage = () => (
  <MainLayout breadcrumb={{ data: [{ text: "About Us" }] }}>
    <Section description="BEST FEATURES" title="OUR SERVICES">
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, omnis
        ipsa nesciunt fuga est quis quisquam consequuntur tempore officia eos
        nobis doloremque, aliquam a deserunt et, rem quos. Neque, natus.
      </div>
    </Section>
  </MainLayout>
);

export default Home;
