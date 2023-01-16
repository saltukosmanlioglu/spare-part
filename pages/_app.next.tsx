import React from "react";
import type { AppProps } from "next/app";

import GlobalStyle from "@/utils/global/Global.styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}
