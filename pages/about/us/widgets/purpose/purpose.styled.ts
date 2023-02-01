import styled from "styled-components";

export const Purpose = styled.div`
  padding: 0 160px 80px;

  & > h1 {
    text-align: center;
    font-family: PSemiBold;
    color: transparent;
    -webkit-text-stroke: 3px #000;
    font-size: 46px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  & > div {
    position: relative;

    img {
      object-fit: cover;
      z-index: -1;
    }
  }
`;
