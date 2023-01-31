import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";

import FilterBar from "@/widgets/filter-bar";

import { categories, products } from "./constants";
import { ProductProps } from "./types";
import * as Styled from "./our-products.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const OurProducts: NextPage = () => {
  const router = useRouter();

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
          index={Number(router.query.index)}
          mCol={1}
        />
      </Styled.OurProducts>
    </DynamicMainLayout>
  );
};

export default OurProducts;
