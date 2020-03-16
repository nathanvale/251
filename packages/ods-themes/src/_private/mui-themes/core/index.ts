import { createMuiTheme } from "@material-ui/core";

import { palette } from "./palette";
import { breakpoints } from "./breakpoints";
import { shadows } from "./shadows";
import { muiTypography } from "./typography";

export const coreMuiTheme = createMuiTheme({
  palette,
  // Breakpoint
  breakpoints,
  // Shadows
  shadows,
  shape: {
    borderRadius: 0,
  },
  typography: muiTypography,

  // Default props
  props: {
    MuiPaper: {
      square: true,
    },
    MuiTextField: {
      autoComplete: "false",
    },
  },

  // overrides: {
  //
  // }
});
