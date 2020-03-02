import * as React from "react";
import MuiThemeProvider, {
  ThemeProviderProps as IThemeProvider,
} from "@material-ui/styles/ThemeProvider";

export interface ThemeProviderProps extends IThemeProvider {}

export const ThemeProvider = (props: ThemeProviderProps) => (
  <MuiThemeProvider {...props}>{props.children}</MuiThemeProvider>
);
