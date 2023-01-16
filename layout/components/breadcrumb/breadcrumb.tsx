import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BreadcrumbProps } from "./types";
import * as Styled from "./breadcrumb.styled";

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({ data }) => {
  return (
    <Styled.Breadcrumb>
      <Styled.Detail>
        <h1>About Us</h1>
        <div>
          <Link href="/home">
            Home <span>/</span>
          </Link>
          {data.map((item, index) =>
            item.href ? (
              <Link key={index} href={item.href} passHref>
                {item.text} <span>/</span>
              </Link>
            ) : (
              <p>{item.text}</p>
            )
          )}
        </div>
      </Styled.Detail>
      <Image alt="" fill src="/images/layout/breadcrumb/1.jpg" />
    </Styled.Breadcrumb>
  );
};

export default Breadcrumb;
