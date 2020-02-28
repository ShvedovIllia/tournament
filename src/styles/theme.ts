import {colors} from "./colors";

export interface ITheme {
  color: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    error: string;
    primary: string;
    secondary: string;
    white: string;
  },
}

export const theme: ITheme = {
  color: {
    backgroundPrimary: colors.mineShaft,
    backgroundSecondary: colors.codGrey,
    error: colors.red,
    primary: colors.aqua,
    secondary: colors.electricViolet,
    white: colors.white,
  },
};
