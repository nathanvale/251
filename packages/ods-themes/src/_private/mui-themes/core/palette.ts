import { createMuiTheme, Theme } from "@material-ui/core";
import { colors } from "./colors";

export const palette: Theme["palette"] = createMuiTheme({
  palette: {
    primary: {
      main: colors.red,
    },
    secondary: {
      main: colors.lightOrange,
    },
    success: {
      main: colors.green,
    },
    info: {
      main: colors.lightBlue,
    },
    warning: {
      main: colors.lightOrange,
    },
    error: {
      main: colors.red,
    },
    action: {
      hoverOpacity: 0.2,
      disabled: colors.grey16,
    },
    text: {
      primary: colors.grey,
      secondary: colors.grey80,
      disabled: colors.grey48,
    },
  },
}).palette;
