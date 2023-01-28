import React, { useEffect, useRef, useState } from "react";

import { ActiveProps } from "./types";
import * as Styled from "./active.styled";

const Active: React.FunctionComponent<ActiveProps> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsActive(false);

    const top = Number(refContainer.current?.getBoundingClientRect().top);

    if (top < window.innerHeight) {
      setIsActive(true);
    } else {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > top - window.innerHeight) {
          setIsActive(true);
        }
      });
    }
  }, []);

  return (
    <Styled.Active ref={refContainer}>
      {isActive ? children : null}
    </Styled.Active>
  );
};

export default Active;
