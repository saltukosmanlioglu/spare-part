import React from "react";
import Image from "next/image";
import Slick, { Settings } from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import Section from "@/components/section";

import * as Styled from "./our-partners.styled";
import { ourPartners } from "./constants";

const OurPartners: React.FunctionComponent = () => {
  const NextArrow: React.FunctionComponent = (
    props: React.HTMLAttributes<SVGElement>
  ) => {
    const { className, onClick } = props;

    return (
      <FaLongArrowAltRight
        className={className}
        color="#000"
        onClick={onClick}
        size={24}
      />
    );
  };

  const PrevArrow: React.FunctionComponent = (
    props: React.HTMLAttributes<SVGElement>
  ) => {
    const { className, onClick } = props;

    return (
      <FaLongArrowAltLeft
        className={className}
        color="#000"
        onClick={onClick}
        size={24}
      />
    );
  };

  const settings: Settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <Section
      padding="80px"
      mPadding="20px"
      background=""
      title="OUR PARTNERS"
      description="Our Partners"
    >
      <Styled.Slider {...settings}>
        {ourPartners.map((partner, index) => (
          <Styled.Partner key={index}>
            <Image alt="" fill src={partner.src} />
          </Styled.Partner>
        ))}
      </Styled.Slider>
    </Section>
  );
};

export default OurPartners;
