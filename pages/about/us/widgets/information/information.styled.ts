import styled from "styled-components";

export const Information = styled.div`
  padding: 0 100px 80px;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > div {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
  }
`;

export const AboutFirm = styled.div`
  b {
    font-size: 42px;
    font-family: PThin;
  }

  p {
    margin-top: 32px;
    font-size: 16px;
    font-family: PLight;
  }
`;

export const Logo = styled.div`
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

export const Border = styled.div`
  margin: auto;
  position: relative;
  width: 350px;
  height: 350px;
  background-color: #fff;
  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);

  img {
    padding: 20px;
    object-fit: contain;
  }

  &:after {
    content: "";
    position: absolute;
    top: 30px;
    left: -30px;
    width: 100%;
    height: 100%;
    border: 4px solid #b19777;
    z-index: -1;
  }

  @media screen and (max-width: 600px) {
    width: calc(100% - 60px) !important;
    height: 200px;
  }
`;
