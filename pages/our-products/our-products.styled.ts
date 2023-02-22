import styled from "styled-components";

export const OurProducts = styled.div`
  padding: 80px 80px 40px;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const PageDetail = styled.div`
  padding: 0 160px 40px;

  h3 {
    font-size: 24px;
    font-family: PThin;
  }

  p {
    margin-top: 20px;
    font-size: 15px;
    font-family: PLight;
  }
`;

export const Product = styled.div`
  position: relative;
  height: 350px;
  width: calc((100% / 4) - 30px);

  & > div:nth-child(1) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    height: 350px;

    :hover {
      background: linear-gradient(to bottom, transparent 0%, black 70%);

      b,
      p {
        display: block;
      }
    }

    b {
      display: none;
      font-size: 18px;
      font-family: PBold;
    }

    p {
      display: none;
      margin-top: 8px;
      font-size: 14px;
      font-family: PLight;
    }
  }

  img {
    object-fit: cover;
    z-index: -1;
  }
`;

export const Content = styled.div`
  padding: 40px 0;

  h1 {
    padding: 8px 0;
    background: url("/images/home/line-pattern.png") repeat;
    text-align: center;
    font-family: PMedium;
    color: #b19777;
    font-size: 24px;
  }
`;

export const DataWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 600px) {
    gap: 20px;

    & > div {
      width: 100%;
    }
  }
`;
