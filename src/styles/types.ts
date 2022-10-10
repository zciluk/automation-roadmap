export const AppColors = ["primary", "beginner", "intermediate", "expert"] as const;
export type Colors = typeof AppColors[number];

export interface ColorScale {
  500: string;
  700: string;
}

export type ColorsPalette = {
  [key in Colors]: ColorScale;
};
