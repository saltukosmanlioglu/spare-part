import React from "react";
import dynamic from "next/dynamic";

import Section from "@/components/section";

const DynamicStages = dynamic(() => import("@/widgets/stages"));

const HowWeDo: React.FunctionComponent = () => {
  return (
    <Section
      background="#fff"
      description="How we do"
      mPadding="20px"
      padding="80px 120px"
      title="How We Do ?"
    >
      <DynamicStages
        captions={[
          { title: "2012" },
          { title: "2015" },
          { title: "2017" },
          { title: "2021" },
          { title: "2023" },
        ]}
        stages={[
          {
            component: (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                dolorum at! Rerum deleniti earum debitis quam sint unde qui
                magni! Quaerat autem a fuga aperiam placeat in totam excepturi
                saepe.
              </p>
            ),
          },
          {
            component: (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                dolorum at! Rerum deleniti earum debitis quam sint unde qui
                magni! Quaerat autem a fuga aperiam placeat in totam excepturi
                saepe.
              </p>
            ),
          },
          {
            component: (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                dolorum at! Rerum deleniti earum debitis quam sint unde qui
                magni! Quaerat autem a fuga aperiam placeat in totam excepturi
                saepe.
              </p>
            ),
          },
          {
            component: (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                dolorum at! Rerum deleniti earum debitis quam sint unde qui
                magni! Quaerat autem a fuga aperiam placeat in totam excepturi
                saepe.
              </p>
            ),
          },
          {
            component: (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                dolorum at! Rerum deleniti earum debitis quam sint unde qui
                magni! Quaerat autem a fuga aperiam placeat in totam excepturi
                saepe.
              </p>
            ),
          },
        ]}
      />
    </Section>
  );
};

export default HowWeDo;
