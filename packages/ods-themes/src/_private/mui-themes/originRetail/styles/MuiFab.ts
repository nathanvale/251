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
    color: colors.grey,
    // boxShadow: "none",
    borderRadius: "50%",
    "&:hover": {
      background: colors.grey4,
    },
    "&$disabled": {
      color: colors.lightGrey,
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
    background: colors.lightGreen,
    "&:hover": {
      background: colors.grey8,
    },
  },
  primary: {
    color: colors.grey,
    // boxShadow: "none",
    "&:active": {
      color: colors.grey,
    },
  },
  // secondary: {},
  // focusVisible: {},
  // colorInherit: {},
};
