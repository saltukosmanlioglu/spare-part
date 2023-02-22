import styled from "styled-components";
import Slick from "react-slick";

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

export const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;

  & > b {
    color: #b19777;
    font-size: 20px;
    font-family: PSemiBold;
    display: block;
    margin-left: auto;
  }

  & > div {
    p {
      span {
        font-size: 100px;
        color: transparent;
        -webkit-text-stroke: 3px #000;
      }
    }

    b {
      letter-spacing: 3px;
      color: #b19777;
    }
  }
`;

export const Slider = styled(Slick)`
  position: relative;

  .slick-slide {
    height: 500px;
    width: 100%;

    div {
      position: relative;
      height: 500px;
      width: 100%;

      img {
        object-fit: cover;
      }
    }
  }
`;
