import React from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import {
  ThemeProvider as MUIThemeProvider,
  Theme as MuiTheme,
} from "@material-ui/core";

import { Theme } from "@origin-digital/ods-types";
import { coreMuiTheme, originRetailTheme } from "../themes";
import { flattenPalette } from "../_private/helpers/flattenPalette";

export interface OriginThemeProviderProps {
  theme?: Theme;
  muiTheme?: MuiTheme;
  children: React.ReactNode;
}

// eslint-disable-next-line babel/no-unused-expressions
injectGlobal`
      html {
        background-color: #f1f1f1;
        height:100%;
      }

      body {
        margin: 0;
        font-family: gordita, sans-serif;
        height: 100%;
      }

      body > div {
        height: 100%;
      }

      @font-face {
        font-family: 'gordita';
        src: url(https://origin-fonts.s3-ap-southeast-2.amazonaws.com/Origin_Gordita-Light.woff2)
          format('woff');
        font-weight: 200;
        font-style: normal;
      }

      @font-face {
        font-family: 'gordita';
        src: url(https://origin-fonts.s3-ap-southeast-2.amazonaws.com/Origin_Gordita-Regular.woff2)
          format('woff');
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: 'gordita';
        src: url(https://origin-fonts.s3-ap-southeast-2.amazonaws.com/Origin_Gordita-Medium.woff2)
          format('woff');
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: 'gordita';
        src: url(https://origin-fonts.s3-ap-southeast-2.amazonaws.com/Origin_Gordita-Bold.woff2)
          format('woff');
        font-weight: 900;
        font-style: normal;
      }
`;

export const OriginThemeProvider = ({
  children,
  theme = originRetailTheme,
  muiTheme = coreMuiTheme,
}: OriginThemeProviderProps) => {
  theme.colors = flattenPalette(muiTheme.palette);
  return (
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>
    </ThemeProvider>
  );
};
