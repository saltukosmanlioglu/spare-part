import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;

  & > div {
    z-index: 2;
    width: 25%;
    height: 400px;
  }

  & > div:last-child {
    position: absolute;
    width: 100%;
    height: 400px;
    z-index: 0;

    img {
      object-fit: cover;
      object-position: 0 0;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    & > div:last-child {
      width: 100%;
      height: 1600px;

      img {
        object-fit: cover;
      }
    }
  }
`;
