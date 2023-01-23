import styled from "styled-components";

export const Section = styled.section<{
  background: string;
  mPadding: string;
  padding: string;
}>`
  padding: ${({ padding }) => padding};
  text-align: center;
  background: ${({ background }) => background};

  & > div:nth-child(1) {
    margin-bottom: 40px;

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

  @media screen and (max-width: 600px) {
    padding: ${({ mPadding }) => mPadding};

    & > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
`;
