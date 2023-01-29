import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

import { StagesProps } from "./types";
import * as Styled from "./stages.styled";

const Stages: React.FunctionComponent<StagesProps> = ({ captions, stages }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slickRef = useRef<any>();

  const settings: Settings = {
    afterChange: (i) => setCurrentIndex(i),
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

  const onStageClick = (index: number) => {
    slickRef.current?.slickGoTo(index);
    setCurrentIndex(index);
  };

  return (
    <Styled.Stages>
      <Styled.Wrapper>
        {captions.map((caption, index) => (
          <Styled.StageButton
            key={index}
            isActive={index === currentIndex || index < currentIndex}
            onClick={() => onStageClick(index)}
          >
            <p>{caption.title}</p>
            <div />
          </Styled.StageButton>
        ))}
        <Styled.LongLine activeIndex={currentIndex + 1}>
          <div />
        </Styled.LongLine>
      </Styled.Wrapper>
      <Slider ref={slickRef} {...settings}>
        {stages.map((stage, index) => (
          <div key={index}>{stage.component}</div>
        ))}
      </Slider>
    </Styled.Stages>
  );
};

export default Stages;
