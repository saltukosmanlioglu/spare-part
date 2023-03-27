import React from "react";

import Breadcrumb from "@/layout/components/breadcrumb";
import Footer from "@/layout/components/footer";
import Menu from "@/layout/components/menu";
import ScrollUp from "@/layout/components/scroll-up";

import { MainLayoutProps } from "./types";
import Head from "next/head";

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  breadcrumb,
  children,
  pageTitle,
}) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Menu />
      {breadcrumb && <Breadcrumb {...breadcrumb} />}
      <div>{children}</div>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default MainLayout;
