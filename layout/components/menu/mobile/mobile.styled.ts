import styled from "styled-components";

export const Mobile = styled.div`
  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  padding: 20px;
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
