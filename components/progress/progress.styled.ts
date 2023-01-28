import styled from "styled-components";

export const Progress = styled.div<{ percent: number }>`
  b {
    font-size: 14px;
    font-family: PMedium;
  }

  & > div {
    position: relative;
    margin-top: 12px;
    background-color: rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 7px;

    div {
      position: absolute;
      left: 0;
      top: 0;
      background-color: #c5a47e;
      width: ${({ percent }) => `${percent}%`};
      height: 7px;
      animation: width-animation 1.5s;

      @keyframes width-animation {
        from {
          width: 0;
        }
        to {
          width: ${({ percent }) => `${percent}%`};
        }
      }

      :after {
        content: attr(aria-valuetext);
        position: absolute;
        right: 10px;
        top: -45px;
        padding: 7px 15px;
        border-radius: 5px;
        background: #c5a47e;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
      }

      :before {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 8px solid #c5a47e;
        position: absolute;
        right: 15px;
        bottom: 14px;
      }
    }
  }
`;
