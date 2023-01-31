import styled from "styled-components";

export const Web = styled.div`
  * {
    font-family: PLight;
  }

  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
  width: 100%;
  padding: 0 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > a:first-child {
    width: 100px;
    height: 23px;
    position: relative;

    img {
      color: #000;
      object-fit: cover;
    }
  }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    position: relative;

    &:hover > div {
      display: flex;
      flex-direction: column;
    }

    & > a,
    & > p {
      padding: 1.5rem 2.1rem 1.5rem 0;
      font-size: 14.5px;
    }
  }
`;

export const SubMenuItems = styled.div`
  min-width: 200px;
  position: absolute;
  display: none;
  background-color: #fff;
  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  z-index: 100;

  a {
    padding: 12px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 0.4s width;

    &:hover svg {
      display: block;
      transition: 0.4s width;
    }

    &:hover p {
      color: #b19777;
    }

    p {
      font-size: 13.5px;
    }

    svg {
      display: none;
      margin-right: 8px;
    }
  }
`;

export const Lang = styled.div`
  margin-left: 24px;
  position: relative;
  cursor: pointer;

  & > div:first-child {
    display: flex;
    flex-direcrion: row;
    align-items: center;

    p {
      margin-right: 12px;
    }
  }

  & > div:last-child {
    display: none;
    position: absolute;
  }

  &:hover > div:last-child {
    box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
    background-color: #fff;
    display: flex;
    flex-direction: column;

    a {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
`;
