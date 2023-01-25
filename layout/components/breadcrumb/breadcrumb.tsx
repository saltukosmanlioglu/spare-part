import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BreadcrumbProps } from "./types";
import * as Styled from "./breadcrumb.styled";

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  data,
  image,
}) => {
  return (
    <Styled.Breadcrumb>
      <Styled.Detail>
        <h1>{data[data.length - 1].text}</h1>
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
              <p key={index}>{item.text}</p>
            )
          )}
        </div>
      </Styled.Detail>
      <Image alt="" fill src={image} />
    </Styled.Breadcrumb>
  );
};

export default Breadcrumb;
