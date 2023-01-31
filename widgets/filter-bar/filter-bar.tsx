import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { onScroll } from "@/utils/funcs";
import { useFilter, useMobile } from "@/utils/hooks";

import { FilterBarProps } from "./types";
import * as Styled from "./filter-bar.styled";

const FilterBar = <T extends unknown>({
  categories,
  component,
  data,
  index,
  mCol,
}: FilterBarProps<T>) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const router = useRouter();
  const filterRef = useRef<HTMLDivElement>(null);

  const { activeIndex, filter, onClick } = useFilter<T>(index);
  const { isMobile } = useMobile();

  const getScroll = () =>
    setTimeout(() => {
      onScroll(
        isMobile
          ? Number(filterRef?.current?.offsetTop) - 62
          : Number(filterRef?.current?.offsetTop) - 92
      );
    }, 300);

  const onMobileClick = (index: number) => {
    onClick(index);
    setIsActive(false);
    getScroll();
  };

  useEffect(() => {
    index && getScroll();
  }, [router.query]);

  return (
    <Styled.FilterBar ref={filterRef}>
      <Styled.Wrapper>
        {categories.map((item, index) => (
          <Styled.FilterButton
            key={index}
            isActive={activeIndex === index}
            onClick={() => onClick(index)}
          >
            <p>{item.text}</p>
          </Styled.FilterButton>
        ))}
      </Styled.Wrapper>
      <Styled.MobileFilter>
        <button onClick={() => setIsActive(!isActive)}>
          <p>{categories[activeIndex].text}</p>
          <MdOutlineKeyboardArrowDown color="#000" size={24} />
        </button>
        {isActive && (
          <Styled.DropdownList>
            {categories.map((item, index) => (
              <button key={index} onClick={() => onMobileClick(index)}>
                <p>{item.text}</p>
              </button>
            ))}
          </Styled.DropdownList>
        )}
      </Styled.MobileFilter>
      <Styled.Content>
        <Styled.DataWrapper mCol={mCol}>
          {data.filter((e) => filter(e, data)).map(component)}
        </Styled.DataWrapper>
      </Styled.Content>
    </Styled.FilterBar>
  );
};

export default FilterBar;
