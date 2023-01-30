import styled from "styled-components";

export const ScrollUp = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 100;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 400ms linear;
  border: 1px solid #b19777;

  @media screen and (max-width: 600px) {
    right: 10px;
    bottom: 20px;
  }
`;
