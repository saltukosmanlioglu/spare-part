import React from "react";

import { useMobile } from "@/utils/hooks";

import Mobile from "./mobile";
import Web from "./web";

const Menu: React.FunctionComponent = () => {
  const { isMobile } = useMobile();

  return isMobile ? <Mobile /> : <Web />;
};

export default Menu;
