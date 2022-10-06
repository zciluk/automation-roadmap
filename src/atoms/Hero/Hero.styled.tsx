import styled from "styled-components";
import { mediaQuery } from "styles/responsive";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  align-content: center;

  text-align: center;

  ${mediaQuery.tablet} {
    height: 237px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 0 0 16px 0;
  ${mediaQuery.tablet} {
    margin-right: auto;
  }
`;

export const Legend = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #4b4b4b;
  margin: 0;
  ${mediaQuery.tablet} {
    margin-right: auto;
  }
`;

export const IllustrationWrapper = styled.div`
  margin-bottom: 32px;
  max-height: fit-content;
  ${mediaQuery.tablet} {
    flex-basis: 100%;
    margin: 0;
    margin-right: 20px;
  }
`;
