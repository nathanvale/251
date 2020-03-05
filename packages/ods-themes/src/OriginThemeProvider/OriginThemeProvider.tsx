import React from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import MUIThemeProvider from "@material-ui/styles/ThemeProvider";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import { Theme } from "@origin-digital/ods-types";
import { originRetailTheme } from "../themes";
import { originRetailMUITheme } from "../_private/mui-themes/originRetail";

export interface OriginThemeProviderProps {
  theme?: Theme;
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
}: OriginThemeProviderProps) => {
  //TODO: create a mapper function that maps originRetailTheme to a originRetailMUITheme
  // https://origindd.atlassian.net/browse/TED-484
  const muiTheme = createMuiTheme(originRetailMUITheme as any);
  return (
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>
    </ThemeProvider>
  );
};
