import { colors } from "../colors";

export const MuiSvgIcon = {
  root: {
    color: colors.secondary,
    fontSize: "48px",
  },
  colorPrimary: {
    color: colors.grey500,
    "&:active": {
      background: colors.transparent,
      color: colors.white,
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
  colorError: {
    color: colors.primaryB,
    background: colors.transparent,
  },
  colorAction: {
    color: colors.positiveLight,
  },
  colorDisabled: {
    color: colors.grey200,
  },
  fontSizeInherit: {
    fontSize: "88px",
  },
  fontSizeSmall: {
    fontSize: "24px",
  },
  fontSizeLarge: {
    fontSize: "64px",
  },
};
