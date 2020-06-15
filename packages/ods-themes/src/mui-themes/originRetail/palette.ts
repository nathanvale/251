import { createMuiTheme, Theme } from "@material-ui/core";

export const palette: Theme["palette"] = createMuiTheme({
  palette: {
    primary: {
      main: "#ec0000",
    },
    secondary: {
      main: "#ffb432",
    },
    success: {
      main: "#008906",
    },
    info: {
      main: "#0a5fd2",
    },
    warning: {
      main: "#ffb432",
    },
    error: {
      main: "#ec0000",
    },
    action: {
      hoverOpacity: 0.2,
      disabled: "#e3e3e3",
    },
  },
}).palette;
