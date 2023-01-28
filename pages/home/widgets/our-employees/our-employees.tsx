import React, { useRef } from "react";
import { Settings } from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import PersonalCard from "@/components/personal-card";

import * as Styled from "./our-employees.styled";

const OurEmployees: React.FunctionComponent = () => {
  const slickRef = useRef<any>();

  const NextArrow: React.FunctionComponent = (
    props: React.HTMLAttributes<HTMLButtonElement>
  ) => {
    const { className } = props;

    const onNext = () => {
      slickRef.current.slickNext();
    };

    return (
      <button className={className} onClick={onNext}>
        <FaLongArrowAltRight size={16} />
      </button>
    );
  };

  const PrevArrow: React.FunctionComponent = (
    props: React.HTMLAttributes<HTMLButtonElement>
  ) => {
    const { className } = props;

    const onPrev = () => {
      slickRef.current.slickPrev();
    };

    return (
      <button className={className} onClick={onPrev}>
        <FaLongArrowAltLeft size={16} />
      </button>
    );
  };

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 200,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Styled.OurEmployees>
      <Styled.Background>
        <div />
        <div />
      </Styled.Background>
      <Styled.Wrapper>
        <Styled.Information>
          <b>Some thoughts from Us</b>
          <h3>Our Employees</h3>
          <p>
            We feel proud for our expert team members beatae ipsum dolor sit
            amet, consectetur adipisicing elit mauris vitae consequat nibh,
            vitae interdum mi.
          </p>
          <Styled.Arrows>
            <PrevArrow />
            <NextArrow />
          </Styled.Arrows>
        </Styled.Information>
        <Styled.Personals ref={slickRef} {...settings}>
          <PersonalCard
            image="/images/about/team/1.jpg"
            name="Leio Man"
            profession="Founder"
            socialMedia={{
              linkedin: "",
            }}
          />
          <PersonalCard
            image="/images/about/team/2.jpg"
            name="Hasib Sharif"
            profession="General Manager"
            socialMedia={{
              linkedin: "",
            }}
          />
          <PersonalCard
            image="/images/about/team/3.jpg"
            name="Robert Front"
            profession="Ceo Founder"
            socialMedia={{
              linkedin: "",
            }}
          />
          <PersonalCard
            image="/images/about/team/4.jpg"
            name="Jonson Leo"
            profession="Founder"
            socialMedia={{
              linkedin: "",
            }}
          />
        </Styled.Personals>
      </Styled.Wrapper>
    </Styled.OurEmployees>
  );
};

export default OurEmployees;
