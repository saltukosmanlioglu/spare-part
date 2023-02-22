import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { Settings } from "react-slick";

import { yearsOfExperiences } from "@/utils/funcs";

import { FrameProps } from "./types";
import * as Styled from "./frame.styled";

const Frame: React.FunctionComponent<FrameProps> = () => {
  const settings: Settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 200,
    swipeToSlide: true,
  };

  return (
    <Styled.Frame>
      <Styled.Background>
        <b>
          SINCE <br /> 2014
        </b>
        <div>
          <p>
            <CountUp duration={0.5} end={yearsOfExperiences} />
          </p>
          <b>YEARS EXPERIENCE</b>
        </div>
      </Styled.Background>
      <Styled.Slider {...settings}>
        <div>
          <Image
            alt="Kaporta - Auto De Part"
            fill
            src="/images/products/kaporta.png"
          />
        </div>
        <div>
          <Image
            alt="Motor - Auto De Part"
            fill
            src="/images/products/motor.jpeg"
          />
        </div>
        <div>
          <Image
            alt="Oto Elektrik - Auto De Part"
            fill
            src="/images/products/oto-elektrik.jpeg"
          />
        </div>
        <div>
          <Image
            alt="Süspansiyon - Auto De Part"
            fill
            src="/images/products/suspansiyon.jpeg"
          />
        </div>
        <div>
          <Image
            alt="Filtreler - Auto De Part"
            fill
            src="/images/products/filtreler.jpeg"
          />
        </div>
        <div>
          <Image
            alt="Fren Sistemi - Auto De Part"
            fill
            src="/images/products/fren-sistemi.png"
          />
        </div>
        <div>
          <Image
            alt="Şanzıman - Auto De Part"
            fill
            src="/images/products/sanziman.jpeg"
          />
        </div>
        <div>
          <Image
            alt="Yağlar - Auto De Part"
            fill
            src="/images/products/yaglar.jpeg"
          />
        </div>
        <div>
          <Image
            alt="Egzoz - Auto De Part"
            fill
            src="/images/products/egzoz.jpeg"
          />
        </div>
        <div>
          <Image
            alt="Diferansiyel - Auto De Part"
            fill
            src="/images/products/diferansiyel.jpeg"
          />
        </div>
      </Styled.Slider>
    </Styled.Frame>
  );
};

export default Frame;
