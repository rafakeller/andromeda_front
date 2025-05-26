export type TColorsSummary = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type TColors = Record<TColorsSummary, string>;

export interface IPalette {
  primary: TColors;
  secondary: TColors;
  tertiary: TColors;
  grayscale: TColors;
}
