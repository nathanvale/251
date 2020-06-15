import React from "react";
import { Theme as MuiTheme } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import {
  coreLayoutTheme,
  getColorPaletteMap,
} from "@origin-digital/ods-themes";
import { Breakpoints } from "@origin-digital/ods-types";

export interface LayoutThemeProvider {
  children: React.ReactNode;
  muiTheme: MuiTheme;
}

export const LayoutThemeProvider = ({
  children,
  muiTheme,
}: LayoutThemeProvider) => {
  /**
   * Layout components need muiTheme breakpoints in a certain format
   * https://styled-system.com/theme-specification/#breakpoints
   */
  const { breakpoints: muiBreakpoints, palette: muiPalette } = muiTheme;
  const { xs, sm, md, lg, xl } = muiBreakpoints.values;
  const layoutBreakpoints: Breakpoints = [
    `${sm}px`,
    `${md}px`,
    `${lg}px`,
    `${xl}px`,
  ];
  // Styled system breakpoint aliases
  layoutBreakpoints.xs = `${xs}px`;
  layoutBreakpoints.sm = layoutBreakpoints[0];
  layoutBreakpoints.md = layoutBreakpoints[1];
  layoutBreakpoints.lg = layoutBreakpoints[2];
  layoutBreakpoints.xl = layoutBreakpoints[3];
  coreLayoutTheme.breakpoints = layoutBreakpoints;
  /**
   * Layout components need muiTheme palette colours in a certain format
   * https://styled-system.com/guides/color-modes/#color-modes
   */
  coreLayoutTheme.colors = getColorPaletteMap(muiPalette);
  return <ThemeProvider theme={coreLayoutTheme}>{children}</ThemeProvider>;
};
