import styled from "styled-components";

export const Purpose = styled.div`
  padding: 0 160px 80px;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 16px;
  }

  & > div {
    position: relative;

    img {
      object-fit: cover;
      z-index: -1;
    }
  }
`;
