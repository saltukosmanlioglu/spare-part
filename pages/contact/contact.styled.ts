import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 80px 160px;

  & > div:nth-child(1) {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
    flex-direction: column-reverse;
    gap: 20px;

    & > div {
      width: 100% !important;

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
  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  padding: 20px;
  border-radius: 8px;
  width: 65%;

  h1 {
    font-size: 32px;
    font-family: PSemiBold;
    color: #252531;
  }

  form {
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
    form {
      gap: 20px;

      & > div {
        width: 100%;
      }
    }
  }
`;

export const Map = styled.div`
  padding: 20px 160px;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;
