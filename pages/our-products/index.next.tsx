import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";

import FilterBar from "@/widgets/filter-bar";

import { categories, products } from "./constants";
import { ProductProps } from "./types";
import * as Styled from "./our-products.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const OurProducts: NextPage = () => {
  return (
    <DynamicMainLayout
      breadcrumb={{
        data: [{ text: "Our Products" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <Styled.OurProducts>
        <FilterBar<ProductProps>
          categories={categories}
          component={(item, index) => (
            <Styled.Product key={index}>
              <div>
                <b>{item.title}</b>
                <p>{item.description}</p>
              </div>
              <Image alt="" fill src={item.src} />
            </Styled.Product>
          )}
          data={products}
          mCol={1}
        />
      </Styled.OurProducts>
    </DynamicMainLayout>
  );
};

export default OurProducts;
