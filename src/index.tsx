import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "styles/global";
import styled from "styled-components";
import Hero from "atoms/Hero/Hero";

const AppContainer = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <AppContainer>
      <Hero />
    </AppContainer>
  );
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
