import styled from "styled-components";

export const InfoWrapper = styled.div`
  padding: 80px 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 600px) {
    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > div {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
    flex-direction: column-reverse;
    gap: 20px;

    & > div {
      width: 100%;

      iframe {
        width: 100%;
        height: 500px;
        outline: none;
        border: none;
      }
    }
  }
`;

export const SendEmail = styled.div`
  padding: 40px;

  h1 {
    font-size: 32px;
    font-family: PSemiBold;
    color: #252531;
  }

  form {
    padding-right: 120px;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    & > div {
      width: calc((100% / 2) - 15px);
    }
    & > div:nth-child(1),
    & > div:nth-child(4) {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;

    form {
      padding-right: 0;
      gap: 20px;

      & > div {
        width: 100%;
      }
    }
  }
`;
