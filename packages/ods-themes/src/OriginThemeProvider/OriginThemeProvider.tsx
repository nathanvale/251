import React from "react";
import { ThemeProvider /*injectGlobal*/ } from "styled-components";
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
