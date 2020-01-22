import React from 'react';
import {
  ThemeProvider,
  DefaultTheme,
  Breakpoints,
  Space,
  Color,
  Typography,
  Border,
  Transform,
  Transition,
  Shadow,
} from 'styled-components';

import {GlobalProvider} from './_private/context/global-context';

export interface OriginThemeProviderProps {
  gridGutterWidth?: 16 | 32;
  children: React.ReactNode;
}

export const OriginThemeProvider = ({
  children,
  ...rest
}: OriginThemeProviderProps) => {
  const {gridGutterWidth = 16} = rest;

  const breakpoints: Breakpoints = ['576px', '768px', '992px', '1200px'];

  breakpoints.xs = '575px';
  breakpoints.sm = breakpoints[0];
  breakpoints.md = breakpoints[1];
  breakpoints.lg = breakpoints[2];
  breakpoints.xl = breakpoints[3];

  const space: Space = [0, 4, 8, 12, 16, 24, 32, 48, 64];
  space.none = space[0];
  space.xxsmall = space[1];
  space.xsmall = space[2];
  space.small = space[3];
  space.medium = space[4];
  space.large = space[5];
  space.xlarge = space[6];
  space.xxlarge = space[7];
  space.xxxlarge = space[8];

  const colors: Color = {
    redPink: '#ff373c',
    red: '#ec0000',
    orange: '#ff8228',
    lightOrange: '#ffb432',
    lightBlue: '#d2f0ff',
    grey: '#505050',
    lightGrey: '#535353',
    blue: '#3f75c6',
    green: '#008906',
    lightGreen: '#a5bb48',
    purple: '#c34789',
    grey4: '#f8f8f8',
    grey8: '#f1f1f1',
    grey16: '#e3e3e3',
    grey24: '#d5d5d5',
    grey48: '#ababab',
    grey80: '#737373',
    grey56: '#232323',
    white: 'white',
    transparent: 'transparent',
  };

  const shadows: Shadow = {
    small:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)',
    medium:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)',
    large:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)',
  };

  const typography: Typography = {
    fontFamily: 'gordita, sans-serif',
    descenderHeightScale: 0.11,
    capHeightScale: 0.75,
    gridRow: 4,
    weight: {
      regular: 500,
      medium: 600,
    },
    text: {
      xxxsmall: {
        size: 12,
        rows: 2,
      },
      xxsmall: {
        size: 14,
        rows: 6,
      },
      xsmall: {
        size: 16,
        rows: 6,
      },
      small: {
        size: 18,
        rows: 6,
      },
      medium: {
        size: 20,
        rows: 7,
      },
      large: {
        size: 24,
        rows: 7,
      },
      xlarge: {
        size: 32,
        rows: 10,
      },
      xxlarge: {
        size: 36,
        rows: 10,
      },
      xxxlarge: {
        size: 56,
        rows: 16,
      },
    },
  };

  const border: Border = {
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: colors.grey16,
      standardInverted: colors.white,
      focus: colors.blue,
      formHover: colors.red,
      critical: colors.green,
      formAccent: colors.purple,
      primary: colors.red,
      secondary: colors.grey,
    },
  };

  const transforms: Transform = {
    touchable: 'scale(0.95)',
  };

  const transitions: Transition = {
    fast: 'transform .15s ease, opacity .15s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  };

  const theme: DefaultTheme = {
    typography,
    space,
    breakpoints,
    gridGutterWidth,
    colors,
    border,
    transforms,
    transitions,
    shadows,
    section: {
      maxWidth: {
        xs: 540,
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>{children}</GlobalProvider>
    </ThemeProvider>
  );
};
