import styled from "styled-components";

export const Stages = styled.div``;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const LongLine = styled.div<{ activeIndex: number }>`
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  position: absolute;
  z-index: 0;
  transition: width 0.5s;

  & > div {
    border: 0.5px solid #b19777;
    width: ${({ activeIndex }) => `${activeIndex * 20}%`};
    transition: width 0.5s;
  }
`;

export const StageButton = styled.button<{ isActive: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid ${({ isActive }) => (isActive ? "#b19777" : "#777")};
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ isActive }) => (isActive ? "#b19777" : "#777")};
  }

  p {
    position: absolute;
    top: -24px;
    left: -4px;
    font-size: 13px;
    font-family: PMedium;
    color: ${({ isActive }) => (isActive ? "#b19777" : "#777")};
  }
`;
