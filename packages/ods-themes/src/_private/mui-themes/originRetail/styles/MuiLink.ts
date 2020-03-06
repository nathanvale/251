import { colors } from "../colors";
import { typography } from "../typography";

export const MuiLink = {
  root: {
    ...typography.text.xxsmall,
    textDecoration: "underline",
  },
  underlineNone: {
    color: `${colors.grey} !important`,
    "&:hover": {
      color: `${colors.red} !important`,
      textDecoration: "none",
    },
  },
  // underlineHover: {},
  // underlineAlways: {},
  // button: {},
  // focusVisible: {},
};
