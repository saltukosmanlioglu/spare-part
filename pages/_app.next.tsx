import React from "react";
import type { AppProps } from "next/app";

import GlobalStyle from "@/utils/global/Global.styled";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}
