import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 32px;
  border: 0.1px solid #252531;
  background-color: #fff;
  transition: 0.5s all;
  margin-left: auto;

  &:hover {
    background-color: #252531;

    p {
      color: #fff;
    }

    svg {
      color: #fff;
    }
  }

  svg {
    animation: 1.5s linear infinite spinner;
    color: #252531;

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  p {
    color: #252531;
  }
`;
