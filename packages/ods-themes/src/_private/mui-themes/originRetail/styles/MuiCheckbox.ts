import {colors} from "../colors";

export const MuiCheckbox = {
  root: {
    border: "none",
    color: colors.grey,
    "&:hover": {
      border: "none",
      background: colors.grey8,
    },
    "&$disabled": {
      color: colors.grey16,
    },
    "&$checked": {
      color: colors.lightOrange,
    },
  },
  // indeterminate: {},
  // colorPrimary: {},
  // colorSecondary: {}
};
