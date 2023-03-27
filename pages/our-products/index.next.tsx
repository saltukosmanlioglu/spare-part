import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";

import { useLanguage } from "@/utils/hooks";

import { ourProductsEn, ourProductsTr } from "./lang";
import * as Styled from "./our-products.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const OurProducts: NextPage = () => {
  const { lang } = useLanguage(ourProductsTr, ourProductsEn);

  return (
    <DynamicMainLayout
      breadcrumb={{
        data: [{ text: lang.breadcrumbTitle }],
        image: "/images/products/filtreler.jpeg",
      }}
    >
      <Styled.OurProducts>
        {/* <Styled.PageDetail>
          <h3>ÜRÜNLERİMİZ HAKKINDA</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            officiis nobis dolores, reprehenderit eos eaque eveniet, at iusto
            vero consequuntur aperiam magni. Laboriosam, quia quam eos magni
            architecto cum. Inventore. Ut ipsa quidem blanditiis, harum unde
            dolor laborum itaque. Est, ullam! Odio, blanditiis sequi laborum in
            architecto, <br /> <br /> odit quam quod consequatur possimus vitae,
            nostrum non enim sapiente earum inventore tempore. Reprehenderit
            quis eveniet iure rem doloremque consequuntur blanditiis dolores
            commodi laborum minima adipisci accusamus repellat, sapiente fuga
            sed magni. Minus dolore suscipit quibusdam doloribus? Ab consequatur
            sed eos veritatis harum.
          </p>
        </Styled.PageDetail> */}
        <Styled.Content>
          <h1>{lang.ourProduct}</h1>
          <Styled.DataWrapper>
            {lang.products.map((product, index) => (
              <Styled.Product key={index}>
                <div>
                  <b>{product.title}</b>
                  <p>{product.description}</p>
                </div>
                <Image alt="" fill src={product.src} />
              </Styled.Product>
            ))}
          </Styled.DataWrapper>
        </Styled.Content>
      </Styled.OurProducts>
    </DynamicMainLayout>
  );
};

export default OurProducts;
