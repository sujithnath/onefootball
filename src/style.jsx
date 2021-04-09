import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import footballImage from "../src/assets/football-bg.jpg";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body *{
    font-family:  'Roboto', sans-serif;
  }

  body {
    width: 100%;
    background-image: url(${footballImage});
    background-color: #27ae60;
  }

`;
