import React from 'react';
import * as styledComponents from 'styled-components';
import { Theme } from './theme';
import withSizes from './withSizes';
export type DeviceSize = 'phone' | 'tablet' | 'desktop' | 'ssr';

type StyledFunction<T> = styledComponents.ThemedStyledFunction<any, Theme>;

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  ThemeConsumer,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withProps,
  ServerStyleSheet,
  withSizes,
  ThemeConsumer,
};

export default styled;