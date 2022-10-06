import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  font-family: "Helvetica Neue";
}
body{
  background-color: #F5F7F6;
}
`;

export default GlobalStyle;
