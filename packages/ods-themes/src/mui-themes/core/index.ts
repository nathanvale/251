import createMuiTheme, {
  ThemeOptions,
} from "@material-ui/core/styles/createMuiTheme";

import { palette } from "./palette";
import { breakpoints } from "./breakpoints";
import { shadows } from "./shadows";
import { getMUITypography } from "./typography";

export const themeOptions: ThemeOptions = {
  palette,
  // Breakpoint
  breakpoints,
  // Shadows
  shadows,
  shape: {
    borderRadius: 0,
  },
  typography: getMUITypography(false),

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
};

export const coreMuiTheme = createMuiTheme(themeOptions);
