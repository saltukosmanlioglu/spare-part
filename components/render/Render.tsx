import React, { useEffect, useRef, useState } from "react";

import { RenderProps } from "./types";

const Render: React.FunctionComponent<RenderProps> = ({ children }) => {
  const [isRender, setIsRender] = useState<boolean>(true);

  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsRender(false);

    const top = Number(refContainer.current?.getBoundingClientRect().top);

    if (top < window.innerHeight) {
      setIsRender(true);
    } else {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > top - window.innerHeight) {
          setIsRender(true);
        }
      });
    }
  }, []);

  return (
    <div ref={refContainer}>
      {isRender ? children : null}
    </div>
  );
};

export default Render;
