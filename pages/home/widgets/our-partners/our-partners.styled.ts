import styled from "styled-components";
import Slick from "react-slick";

export const Slider = styled(Slick)`
  .slick-next {
    right: -40px !important;
  }

  .slick-prev {
    left: -40px !important;
  }
`;

export const Partner = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  img {
    object-fit: cover;
  }
`;
