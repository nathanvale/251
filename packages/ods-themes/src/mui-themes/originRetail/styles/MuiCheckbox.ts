import { colors } from "../colors";

export const MuiCheckbox = {
  root: {
    border: "none",
    color: colors.grey500,
    "&:hover": {
      border: "none",
      background: colors.grey50,
    },
    "&$disabled": {
      color: colors.grey200,
    },
    "&$checked": {
      color: colors.secondary,
    },
  },
  // indeterminate: {},
  // colorPrimary: {},
  // colorSecondary: {}
};
