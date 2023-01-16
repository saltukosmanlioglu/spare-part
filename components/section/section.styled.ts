import styled from "styled-components";

export const Section = styled.section<{ mPadding: string; padding: string }>`
  padding: ${({ padding }) => padding};
  text-align: center;
  background-color: #f8f4f3;

  @media screen and (max-width: 600px) {
    padding: ${({ mPadding }) => mPadding};
  }

  & > div:nth-child(1) {
    margin-bottom: 80px;

    p {
      color: #b19777;
      font-size: 15px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 40px;
      font-family: PThin;
    }
  }
`;
