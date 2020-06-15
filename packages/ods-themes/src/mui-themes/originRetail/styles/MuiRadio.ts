import { colors } from "../colors";

export const MuiRadio = {
  root: {
    border: "none",
    // boxShadow: "none",
    color: colors.grey500,
    "& .MuiSvgIcon": {
      color: colors.grey500,
      fontSize: "24px",
    },
    "&:hover": {
      border: "none",
      // boxShadow: "none",
      background: colors.grey50,
    },
    "&:focus": {
      background: colors.yellow16,
    },
    "&$checked": {
      color: `${colors.secondary} !important`,
    },
    "&:disabled": {
      color: colors.grey200,
    },
  },
  colorPrimary: {
    color: colors.secondary,
  },
  // checked: {},
};
