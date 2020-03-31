import { colors } from "../colors";
import { typography } from "../typography";

export const MuiFab = {
  root: {
    textTransform: "none",
    background: colors.white,
    fontStyle: typography.fontStyle.regular,
    width: 40,
    height: 40,
    ...typography.text.xxsmall,
    color: colors.grey500,
    // boxShadow: "none",
    borderRadius: "50%",
    "&:hover": {
      background: colors.grey50,
    },
    "&$disabled": {
      color: colors.grey500,
    },
    // '&:active': {
    //   boxShadow: "none",
    // }
  },
  sizeSmall: {
    padding: "12px 16px",
    fontStyle: typography.fontStyle.medium,
    ...typography.text.xxsmall,
  },
  sizeMedium: {
    width: 56,
    height: 56,
  },
  label: {
    fontWeight: typography.weight.regular,
    width: "auto",
    ...typography.text.small,
    textAlign: "center",
    color: colors.black,
  },
  extended: {
    background: colors.positiveLight,
    "&:hover": {
      background: colors.grey50,
    },
  },
  primary: {
    color: colors.grey500,
    // boxShadow: "none",
    "&:active": {
      color: colors.grey500,
    },
  },
  // secondary: {},
  // focusVisible: {},
  // colorInherit: {},
};
