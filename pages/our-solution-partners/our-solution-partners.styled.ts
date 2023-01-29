import styled from "styled-components";

export const OurSolutionPartners = styled.div`
  padding: 80px;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const Value = styled.div`
  position: relative;
  width: calc((100% / 4) - 30px);
  height: 150px;

  img {
    object-fit: contain;
  }
`;
