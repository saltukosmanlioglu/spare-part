import styled from "styled-components";

export const OurTeam = styled.div`
  padding: 80px;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const Information = styled.div`
  padding: 0 80px 100px;

  h2 {
    font-size: 55px;
    font-family: PMedium;
  }
  p {
    margin-top: 20px;
    font-size: 14px;
    font-family: PLight;
  }

  @media screen and (max-width: 600px) {
    padding: 32px 0;

    h2 {
      font-size: 40px;
    }

    p {
      margin-top: 12px;
      font-size: 15px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;

  & > div {
    width: calc((100% / 4) - 75px);
  }

  @media screen and (max-width: 600px) {
    gap: 20px;

    & > div {
      width: 100%;
    }
  }
`;
