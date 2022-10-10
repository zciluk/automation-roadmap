export const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1023px",
};

export const mediaQuery = {
  mobile: `@media screen and (max-width: ${size.tablet})`,
  tablet: `@media screen and (min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,
};

export type Media = keyof typeof mediaQuery;
