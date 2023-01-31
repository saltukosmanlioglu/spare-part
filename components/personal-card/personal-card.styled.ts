import styled from "styled-components";

export const Hover = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  transition: 0.5s all;

  @media screen and (max-width: 600px) {
    height: 450px;
  }

  & > div {
    position: relative;

    & > div {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      padding: 12px 6px;
      background-color: #fff;
      animation: swipe 0.5s;

      @keyframes swipe {
        0% {
          left: -36px;
        }
        100% {
          left: 0;
        }
      }

      a {
        padding: 4px;
      }
    }
  }
`;

export const PersonalCard = styled.div`
  position: relative;
  overflow: hidden;

  & > div:nth-child(1) {
    position: relative;
    width: 100%;
    height: 350px;

    @media screen and (max-width: 600px) {
      height: 450px;
    }

    img {
      object-fit: cover;
    }

    :hover ${Hover} {
      display: block;
    }
  }

  & > div:nth-child(2) {
    padding: 20px;
    text-align: center;

    b {
      font-size: 18px;
      font-family: PSemiBold;
    }

    p {
      margin-top: 4px;
      color: #777;
      font-size: 14px;
      font-family: PLight;
    }

    @media screen and (max-width: 600px) {
      b {
        font-size: 20px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;
