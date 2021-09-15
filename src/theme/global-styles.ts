import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &:root {
    --grey: #e2e2e2;
    --blue: #1e90ff;
    --white: #fff;
    --black: #000;
    --primary: #1e90ff;
  }
`;

export default GlobalStyle;
