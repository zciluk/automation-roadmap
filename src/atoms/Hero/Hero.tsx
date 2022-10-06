import React from "react";

import { HeroContainer, IllustrationWrapper, Legend, Title } from "./Hero.styled";
import { ReactComponent as HeroImage } from "assets/akol_beseder.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <IllustrationWrapper>
        <HeroImage />
      </IllustrationWrapper>
      <Title>Automation roadmap </Title>
      <Legend>From zero to automation hero</Legend>
    </HeroContainer>
  );
};

export default Hero;
