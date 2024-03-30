import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';

interface ITheme {
  children: React.ReactNode;
}

const colors = {
  main: '#FFBB6B',
  subMain: '#FF9921',
  mustard: '#FFE500',
  yellow: '#FAFF00',
  black: '#000000',
  modernBlack: '#434343',
  gray: '#A9A9A9',
  white: '#FFFFFF',
  green: '#3bb957',
};

export type ColorsTypes = typeof colors;

export default function Theme({ children }: ITheme) {
  return (
    <ThemeProvider
      theme={{
        colors,
      }}
    >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
