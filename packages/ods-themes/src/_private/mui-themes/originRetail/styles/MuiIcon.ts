import { colors } from "../colors";

export const MuiIcon = {
  root: {
    color: colors.secondary,
    fontSize: "48px",
    "&:active": {
      color: colors.white,
    },
  },
  fontSizeSmall: {
    fontSize: "24px",
  },
  fontSizeLarge: {
    fontSize: "64px",
  },
  fontSizeInherit: {
    fontSize: "88px",
  },
  colorPrimary: {
    color: colors.grey500,
    "&:active": {
      background: colors.transparent,
      color: colors.grey500,
    },
  },
  colorSecondary: {
    color: colors.primaryB,
    "&:hover": {
      background: colors.transparent,
    },
    "&:active": {
      color: colors.white,
      background: colors.primaryB,
    },
  },
  colorDisabled: {
    color: colors.grey200,
  },
  colorError: {
    color: colors.primaryB,
    background: colors.transparent,
  },
  colorAction: {
    color: colors.positiveLight,
  },
};
