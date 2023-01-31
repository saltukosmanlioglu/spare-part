import React from "react";
import Image from "next/image";
import { Settings } from "react-slick";

import { ourPartners } from "./constants";
import * as Styled from "./our-partners.styled";

const OurPartners: React.FunctionComponent = () => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    speed: 200,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Styled.OurPartners>
      <Styled.Slider {...settings}>
        {ourPartners.map((partner, index) => (
          <Styled.Partner key={index}>
            <Image alt="" fill src={partner.src} />
          </Styled.Partner>
        ))}
      </Styled.Slider>
    </Styled.OurPartners>
  );
};

export default OurPartners;
