import styled from "styled-components";

export const Percentages = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & > div {
    width: 50%;
    padding: 30px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;

    & > div {
      width: 100%;
      padding: 0;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  & > div {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    gap: 20p;
    margin-top: 40px;
  }
`;

export const Information = styled.div`
  h3 {
    font-size: 24px;
    line-height: 50px;
  }

  p {
    font-family: PLight;
    font-size: 14px;
    line-height: 2;
  }

  p:nth-child(2) {
    margin: 20px 0 12px;
  }
`;
