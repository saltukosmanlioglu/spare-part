import styled from "styled-components";

export const FilterBar = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  background: url("/images/home/line-pattern.png") repeat;
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

  :after  {
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

export const DataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 600px) {
    gap: 20px;
  }
`;
