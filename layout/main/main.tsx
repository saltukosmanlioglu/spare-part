import React from "react";

import Breadcrumb from "@/layout/components/breadcrumb";
import Footer from "@/layout/components/footer";
import Header from "@/layout/components/header";
import ScrollUp from "@/layout/components/scroll-up";

import { MainLayoutProps } from "./types";

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  breadcrumb,
  children,
}) => {
  return (
    <div>
      <Header />
      {breadcrumb && (
        <div style={{ paddingTop: 40 }}>
          <Breadcrumb {...breadcrumb} />
        </div>
      )}
      <div>{children}</div>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default MainLayout;
