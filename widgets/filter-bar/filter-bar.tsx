import React, { useState } from "react";

import { useFilter } from "@/utils/hooks";

import { FilterBarProps } from "./types";
import * as Styled from "./filter-bar.styled";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { onScroll } from "@/utils/funcs";

const FilterBar = <T extends unknown>({
  component,
  categories,
  data,
  mCol,
}: FilterBarProps<T>) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { activeIndex, filter, onClick } = useFilter<T>();

  const onMobileClick = (index: number) => {
    onClick(index);
    setIsActive(false);
    onScroll(550);
  };

  return (
    <Styled.FilterBar>
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
                {item.text}
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
