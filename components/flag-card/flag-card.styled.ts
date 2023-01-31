import styled from "styled-components";

import { FlagCardType } from "./types";

export const FlagCard = styled.div<{ type: FlagCardType }>`
  position: fixed;
  bottom: 60px;
  right: 40px;
  background-color: ${({ type }) => (type === "error" ? "red" : "#51e451")};
  padding: 20px;
  width: 350px;
  animation: right-to-left 0.3s ease;

  @keyframes right-to-left {
    0% {
      right: -390px;
    }
    100% {
      right: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    right: 20px;
    width: auto;
    animation: right-to-left 0.3s ease;

    @keyframes right-to-left {
      0% {
        right: -390px;
      }
      100% {
        right: 20px;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-left: 16px;
    font-family: PMedium;
    font-size: 16px;
  }
`;

export const Body = styled.div`
  margin-top: 12px;

  p {
    margin-left: 36px;
    font-family: PLight;
    font-size: 13px;
  }
`;
