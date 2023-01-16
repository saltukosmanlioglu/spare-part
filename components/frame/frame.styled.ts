import styled from "styled-components";

export const Frame = styled.div`
  position: relative;
  height: 500px;
  padding: 40px;

  img {
    z-index: -1;
    object-fit: cover;
  }
`;

export const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
