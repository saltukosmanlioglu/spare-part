import React from "react";

import Breadcrumb from "@/layout/components/breadcrumb";
import Footer from "@/layout/components/footer";
import ScrollUp from "@/layout/components/scroll-up";

import { MainLayoutProps } from "./types";

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  breadcrumb,
  children,
}) => {
  return (
    <div>
      <div style={{ height: 100 }}></div>
      {breadcrumb && <Breadcrumb {...breadcrumb} />}
      <div>{children}</div>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default MainLayout;
