import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import PersonalCard from "@/components/personal-card";

import { personals } from "./constants";
import * as Styled from "./our-team.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const OurTeam: NextPage = () => {
  return (
    <DynamicMainLayout
      breadcrumb={{
        data: [{ text: "About - Our Team" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <Styled.OurTeam>
        <Styled.Information>
          <h2>WHO WE ARE ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            corporis, porro provident nesciunt possimus nam pariatur iusto
            blanditiis eos molestias dicta et iure quisquam molestiae excepturi
            deleniti? Itaque, dignissimos neque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quod corporis, porro provident
            nesciunt possimus nam pariatur iusto blanditiis eos molestias dicta
            et iure quisquam molestiae excepturi deleniti? Itaque, dignissimos
            neque.
          </p>
        </Styled.Information>
        <Styled.Wrapper>
          {personals.map((personal, index) => (
            <PersonalCard key={index} {...personal} />
          ))}
        </Styled.Wrapper>
      </Styled.OurTeam>
    </DynamicMainLayout>
  );
};

export default OurTeam;
