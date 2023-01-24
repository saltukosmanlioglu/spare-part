import React from "react";

import { useMobile } from "@/utils/hooks";

import Mobile from "./mobile";
import Web from "./web";

const Header: React.FunctionComponent = () => {
  const { isMobile } = useMobile();

  return isMobile ? <Mobile /> : <Web />;
};

export default Header;
