import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

import * as Styled from "./scroll-up.styled";

const ScrollUp: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const onScroll = () =>
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window && window.scrollY > 350 ? setVisible(true) : setVisible(false);
    });
  }, []);

  return visible ? (
    <Styled.ScrollUp onClick={onScroll}>
      <MdKeyboardArrowUp color="#b19777" size={24} />
    </Styled.ScrollUp>
  ) : null;
};

export default ScrollUp;
