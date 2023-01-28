import React from "react";

import { useFilter } from "@/utils/hooks";

import { FilterBarProps } from "./types";
import * as Styled from "./filter-bar.styled";

const FilterBar = <T extends unknown>({
  component,
  categories,
  data,
}: FilterBarProps<T>) => {
  const { activeIndex, filter, onClick } = useFilter<T>();

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
      <Styled.Content>
        <Styled.DataWrapper>
          {data.filter((e) => filter(e, data)).map(component)}
        </Styled.DataWrapper>
      </Styled.Content>
    </Styled.FilterBar>
  );
};

export default FilterBar;
