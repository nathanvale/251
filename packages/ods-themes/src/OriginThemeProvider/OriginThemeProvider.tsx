import React from 'react';
import {ThemeProvider} from 'styled-components';

import {Theme} from '../types';
import {originRetail} from '../themes';

export interface OriginThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const OriginThemeProvider = ({
  children,
  theme = originRetail,
}: OriginThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
