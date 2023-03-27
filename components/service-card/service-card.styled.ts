import styled from "styled-components";

export const ServiceCard = styled.div<{ isShadow?: boolean }>`
  padding: 60px 40px;
  height: 100%;
  background-color: #fff;
  border: ${({ isShadow }) => (!isShadow ? "0.5px solid #eee" : "none")};
  text-align: left;
  box-shadow: ${({ isShadow }) =>
    isShadow ? "0px 5px 20px rgb(0 0 0 / 5%)" : "none"};

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;

  @media screen and (max-width: 600px) {
    padding: 20px 30px;
  }

  &:hover {
    background-color: rgba(2, 5, 11, 0.6);

    p,
    h1,
    svg {
      color: #fff;
    }

    a {
      color: #b19777;
    }
  }

  div {
    margin-bottom: 30px;

    svg {
      color: #000;
    }

    b {
      font-size: 40px;
      font-family: PBold;
      color: transparent;
      -webkit-text-stroke: 1px #b19777;
    }
  }

  h1 {
    margin: 0 0 20px;
    font-size: 18px;
    font-family: PSemiBold;
  }

  p {
    color: #888;
    line-height: 2;
  }

  a {
    p {
      margin-top: 30px;
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
`;
