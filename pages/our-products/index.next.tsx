import React from "react";
import { NextPage } from "next";
import Image from "next/image";

import MainLayout from "@/layout/main";
import FilterBar from "@/widgets/filter-bar";

import { categories, products } from "./constants";
import { ProductProps } from "./types";
import * as Styled from "./our-products.styled";

const OurProducts: NextPage = () => {
  return (
    <MainLayout
      breadcrumb={{
        data: [{ text: "Our Products" }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <Styled.OurProducts>
        <FilterBar<ProductProps>
          categories={categories}
          children={(item, index) => (
            <Styled.Product key={index}>
              <div>
                <b>{item.title}</b>
                <p>{item.description}</p>
              </div>
              <Image alt="" fill src={item.src} />
            </Styled.Product>
          )}
          data={products}
        />
      </Styled.OurProducts>
    </MainLayout>
  );
};

export default OurProducts;
