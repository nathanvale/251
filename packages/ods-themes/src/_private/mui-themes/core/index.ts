import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import { flattenPalette } from "../../helpers/flattenPalette";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";
import { shadows } from "./shadows";
import { muiTypography } from "./typography";

export const coreMuiTheme = createMuiTheme({
  colors: flattenPalette(palette),
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
