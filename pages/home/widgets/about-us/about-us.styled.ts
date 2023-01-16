import styled from "styled-components";

export const AboutUs = styled.div`
  padding: 80px 120px;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > div:first-child {
    width: 45%;
    padding: 0 60px;
  }

  & > div:last-child {
    width: 55%;
    padding-right: 40px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;

    & > div {
      width: 100% !important;
    }

    & > div:first-child {
      margin-top: 40px;
      padding: 0;
    }
  }
`;

export const Information = styled.div`
  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;

    b {
      color: #b19777;
      font-size: 12px;
      letter-spacing: 4px;
      margin: 0;
      margin-left: 16px;
    }
  }

  h3 {
    margin: 15px 0;
    font-size: 40px;
    font-family: PThin;
  }

  p {
    font-size: 15px;
    color: #888888;
    line-height: 2;
  }
`;

export const Counts = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    h1 {
      span {
        font-size: 32px;
        font-family: PThin;
      }
    }

    p {
      margin-top: 12px;
      font-size: 13px;
      font-family: PLight;
      letter-spacing: 2px;
    }
  }
`;
