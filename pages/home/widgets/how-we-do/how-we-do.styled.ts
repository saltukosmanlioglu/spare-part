import styled from "styled-components";

export const HowWeDo = styled.div`
  padding: 80px 120px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Circle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  & > div {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px !important;
  }

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
  }

  b {
    font-size: 24px;
    font-family: PSemiBold;
  }
`;
