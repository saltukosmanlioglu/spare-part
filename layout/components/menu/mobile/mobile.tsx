import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

import * as Styled from "./mobile.styled";

const Mobile: React.FunctionComponent = () => {
  return (
    <Styled.Mobile>
      <Styled.Wrapper>
        <Link href="/home">
          <Image alt="Auto RAR" fill src="/images/logo/logo-dark.png" />
        </Link>
        <button>
          <HiMenu color="#000" size={32} />
        </button>
      </Styled.Wrapper>
    </Styled.Mobile>
  );
};

export default Mobile;
