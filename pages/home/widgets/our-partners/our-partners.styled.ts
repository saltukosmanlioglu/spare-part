import styled from "styled-components";
import Slick from "react-slick";

export const OurPartners = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 45px rgb(10 10 10 / 6%);
  margin: 0 160px -115px;
  padding: 40px 30px;
  background-color: #fff;

  @media screen and (max-width: 600px) {
    margin: 20px 20px -65px;
    padding: 20px 15px;
  }
`;

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
  width: 100%;
  height: 150px;

  @media screen and (max-width: 600px) {
    height: 100px;
  }

  img {
    object-fit: contain;
  }
`;
