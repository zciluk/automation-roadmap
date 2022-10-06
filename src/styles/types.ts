export type Colors = "primary" | "beginner" | "intermediate" | "expert";

export interface ColorScale {
  500: string;
  700: string;
}

export type ColorsPalette = {
  [key in Colors]: ColorScale;
};
