import Color from "color";
import * as R from 'ramda';

export interface IColors {
  aqua: string;
  codGrey: string;
  electricViolet: string;
  mineShaft: string;
  red: string;
  silver: string;
  white: string;
}

export const colors: IColors = {
  aqua: '#00FFFF',
  codGrey: '#141414',
  electricViolet: '#8200EB',
  mineShaft: '#2B2B2B',
  red: '#FA0800',
  silver: '#C5C5C5',
  white: '#FFFFFF',

};

type IColorsMap = {[color in keyof IColors]: Color};

/** Map with helper methods to change colors */
export const Colors = R.map<IColors, IColorsMap>(c => Color(c), colors);
