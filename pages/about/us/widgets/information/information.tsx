import React from "react";
import Image from "next/image";

import * as Styled from "./information.styled";

const Information: React.FunctionComponent = () => {
  return (
    <Styled.Information>
      <Styled.Wrapper>
        <Styled.AboutFirm>
          <b>
            Creative Solutions <br /> by Professional <br /> Designers
          </b>
          <p>
            Cras vel cursus libero. Vestibulum porttitor nunc enim, quis congue
            leo fringilla ut. Quisque in lacus lacus. Nunc malesuada nisi at
            porta convallis.
            <br /> <br />
            Cras vel cursus libero. Vestibulum porttitor nunc enim, quis congue
            leo fringilla ut. Quisque in lacus lacus. Nunc malesuada nisi at leo
            fringilla ut. Quisque in lacus lacus. Nunc malesuada nisi at In
            posuere interdum erat, et bibendum arcu. Etiam quis viverra diam.
            <br /> <br />
            Cras vel cursus libero. Vestibulum porttitor nunc enim, quis congue
            leo fringilla ut. Quisque in lacus lacus. Nunc malesuada nisi at
            porta convallis.
          </p>
        </Styled.AboutFirm>
        <Styled.Logo>
          <Styled.Border>
            <Image alt="Auto RAR" fill src="/images/logo/logo-dark.png" />
          </Styled.Border>
        </Styled.Logo>
      </Styled.Wrapper>
    </Styled.Information>
  );
};

export default Information;
