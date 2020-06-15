import { colors } from "../colors";
import { typography } from "../typography";

export const MuiLink = {
  root: {
    ...typography.text.xxsmall,
    textDecoration: "underline",
  },
  underlineNone: {
    color: `${colors.grey500} !important`,
    "&:hover": {
      color: `${colors.primary} !important`,
      textDecoration: "none",
    },
  },
  // underlineHover: {},
  // underlineAlways: {},
  // button: {},
  // focusVisible: {},
};
