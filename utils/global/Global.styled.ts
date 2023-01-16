import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: PRegular;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.4;
  }
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    a {
      color: #000;
      text-decoration: none;
    }
  }

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #000; 
  }
  ::-webkit-scrollbar-thumb {
    background: #fff; 
  }

  @font-face {
    font-family: PBlack;
    src: url(/fonts/Poppins-Black.ttf);
  }
  @font-face {
    font-family: PBlackItalic;
    src: url(/fonts/Poppins-BlackItalic.ttf);
  }
  @font-face {
    font-family: PBold;
    src: url(/fonts/Poppins-Bold.ttf);
  }
  @font-face {
    font-family: PBoldItalic;
    src: url(/fonts/Poppins-BoldItalic.ttf);
  }
  @font-face {
    font-family: PExtraBold;
    src: url(/fonts/Poppins-ExtraBold.ttf);
  }
  @font-face {
    font-family: PExtraBoldItalic;
    src: url(/fonts/Poppins-ExtraBoldItalic.ttf);
  }
  @font-face {
    font-family: PExtraLight;
    src: url(/fonts/Poppins-ExtraLight.ttf);
  }
  @font-face {
    font-family: PExtraLightItalic;
    src: url(/fonts/Poppins-ExtraLightItalic.ttf);
  }
  @font-face {
    font-family: PItalic;
    src: url(/fonts/Poppins-Italic.ttf);
  }
  @font-face {
    font-family: PLight;
    src: url(/fonts/Poppins-Light.ttf);
  }
  @font-face {
    font-family: PLightItalic;
    src: url(/fonts/Poppins-LightItalic.ttf);
  }
  @font-face {
    font-family: PMedium;
    src: url(/fonts/Poppins-Medium.ttf);
  }
  @font-face {
    font-family: PMediumItalic;
    src: url(/fonts/Poppins-MediumItalic.ttf);
  }
  @font-face {
    font-family: PRegular;
    src: url(/fonts/Poppins-Regular.ttf);
  }
  @font-face {
    font-family: PSemiBold;
    src: url(/fonts/Poppins-SemiBold.ttf);
  }
  @font-face {
    font-family: PSemiBoldItalic;
    src: url(/fonts/Poppins-SemiBoldItalic.ttf);
  }
  @font-face {
    font-family: PThin;
    src: url(/fonts/Poppins-Thin.ttf);
  }
  @font-face {
    font-family: PThinItalic;
    src: url(/fonts/Poppins-ThinItalic.ttf);
  }
`;

export default GlobalStyle;
