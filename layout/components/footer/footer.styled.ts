import styled from "styled-components";

export const Footer = styled.footer`
  * {
    color: #fff;
  }

  border: 25px solid #fff;
  background-color: #252531;
  padding: 100px 120px;

  @media screen and (max-width: 600px) {
    padding: 100px 0;
    border: 20px solid #fff;
  }
`;

export const Containter = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    width: 100%;
    padding: 0 15px;

    h3 {
      margin-bottom: 30px;
      font-size: 25px;
      font-family: PSemiBold;
    }

    img {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    & > div {
      &:not(:first-child) {
        margin-top: 30px;
      }
    }
  }
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin: 0 0 25px;
  }

  & > div {
    margin-left: 30px;

    h6 {
      font-size: 14px;
      font-family: PSemiBold;
    }

    p {
      font-size: 15px;
      color: #888888;
      font-family: PLight;
      line-height: 2;
    }
  }
`;

export const News = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  img {
    object-fit: cover;
  }

  div {
    margin-left: 15px;

    p {
      font-size: 13px;
      font-family: PLight;
      line-height: 2;
      color: #888888;
    }

    b {
      font-size: 12px;
      font-family: PMedium;
      color: #b19777;
    }
  }
`;

export const SendMail = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    padding: 15px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b19777;
    width: 60px !important;
    height: 50px;
    border-radius: 50%;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 13px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const CopyRight = styled.div`
  margin-top: 30px;

  p {
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #888888;

    span {
      a {
        color: #b19777;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
