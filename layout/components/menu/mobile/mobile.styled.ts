import styled from "styled-components";

export const Mobile = styled.div`
  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  padding: 10px 20px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000000;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > a {
    width: 60px;
    height: 14px;
    position: relative;
  }
`;

export const Menu = styled.div<{ isActive: boolean }>`
  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  background-color: #fff;
  position: absolute;
  top: 57px;
  left: 0;
  width: 100%;
  padding: 10px 20px;

  & > div {
    padding: 8px 0;
    width: 100%;

    & > button {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 14px;
        font-family: PLight;
      }
    }

    & > div {
      padding: 6px 12px;

      & > button {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 6px 0;

        p {
          font-size: 14px;
          font-family: PLight;
        }

        svg {
          margin-right: 12px;
        }
      }
    }
  }
`;

export const Lang = styled.div`
  a {
    font-size: 14px;
    font-family: PLight;
  }

  span {
    margin: 0 12px;
  }
`;
