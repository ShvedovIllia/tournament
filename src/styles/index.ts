import * as styledComponents from 'styled-components';

import {ITheme, theme} from './theme';

const {
  default: styled,
  css,
  withTheme,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export type IThemeProps = styledComponents.ThemeProps<ITheme>;
export { styled, css, ThemeProvider, withTheme, theme };
export * from './global';
