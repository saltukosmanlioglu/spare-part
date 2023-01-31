import styled from "styled-components";

export const FilterBar = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  background: url("/images/home/line-pattern.png") repeat;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const FilterButton = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin: 0 20px;

  :hover p {
    color: #b19777;
  }

  :last-child {
    :after {
      display: none;
    }
  }

  :after {
    content: "";
    width: 7px;
    height: 7px;
    background: #b19777;
    border-radius: 50%;
    position: absolute;
    right: -23.5px;
  }

  svg {
    margin-right: 12px;
  }

  p {
    font-size: 14px;
    font-family: PMedium;
    color: ${({ isActive }) => (isActive ? "#b19777" : "#000")};
  }
`;

export const Content = styled.div`
  padding: 40px 0;
`;

export const DataWrapper = styled.div<{ mCol: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 600px) {
    gap: 20px;

    & > div {
      width: ${({ mCol }) =>
        mCol > 1
          ? `calc((100% / ${mCol}) - (20px / ${mCol}))`
          : `calc(100% / ${mCol})`};
    }
  }
`;

export const MobileFilter = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    * {
      color: #000;
    }

    position: relative;
    display: block;
    background-color: #fff;
    position: sticky;
    top: 62px;
    z-index: 10000;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);

    & > button {
      display: flex;
      flex-direction: row;
      padding: 16px 20px;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      p {
        font-size: 16px;
      }
    }
  }
`;

export const DropdownList = styled.div`
  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;

  button {
    width: 100%;
    padding: 8px 20px;
    width: 100%;
    text-align: left;
    color: #000;

    p {
      font-size: 16px;
    }
  }
`;
