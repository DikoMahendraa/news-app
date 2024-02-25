export const colors = {
  blue: '#0289ee',
  white: '#ffffff',
  black: 'black',
  gray: '#bbbec4',
  disabled: '#f6f6f7',
  green: '#6fc276',
} as const;

export type ColorName = keyof typeof colors;

export const colorPalette = {
  primary: colors.blue,
  flat: colors.white,
  gray: colors.gray,
  black: colors.black,
  disabled: colors.disabled,
  green: colors.green,
} as const;

export type PaletteColorName = keyof typeof colorPalette;
