import { useCallback, useState } from "react";

const useFilter = <T extends unknown>(index?: number) => {
  const [activeIndex, setActiveIndex] = useState<number>(index ? index : 0);

  const onClick = (index: number) => {
    setActiveIndex(index);
  };

  const filter = useCallback(
    (e: { type: number }, data: Array<T>) => {
      if (e.type === activeIndex) {
        return data;
      } else if (activeIndex === 0) {
        return data;
      }
    },
    [activeIndex]
  );

  return { activeIndex, filter, onClick };
};

export default useFilter;
