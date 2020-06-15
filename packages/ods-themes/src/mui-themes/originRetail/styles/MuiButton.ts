import { colors } from "../colors";
import { typography } from "../typography";

export const MuiButton = {
  root: {
    borderRadius: 0,
    textTransform: "none",
    padding: "12px 24px",
    fontStyle: typography.fontStyle.medium,
    ...typography.text.xsmall,
    "&$disabled": {
      color: colors.grey500,
    },
  },
  sizeSmall: {
    padding: "12px 16px",
    fontStyle: typography.fontStyle.medium,
    ...typography.text.xsmall,
  },
  containedPrimary: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: colors.darkRed,
    },
  },
  containedSecondary: {
    backgroundColor: colors.grey500,
    color: colors.white,
    borderRadius: 0,
    border: `1px solid ${colors.grey500}`,
    "&:hover": {
      backgroundColor: colors.darkGrey,
      color: colors.white,
      border: `1px solid ${colors.darkGrey}`,
      "& .MuiIcon-colorPrimary": {
        color: colors.white,
      },
    },
  },
  label: {
    textTransform: "none",
  },
  outlinedPrimary: {
    color: colors.primary,
    backgroundColor: colors.white,
    borderRadius: 0,
    border: `1px solid ${colors.primary}`,
    "&:hover": {
      backgroundColor: colors.darkRed,
      color: colors.white,
      border: `1px solid ${colors.darkRed}`,
    },
  },
  outlinedSecondary: {
    color: colors.grey500,
    backgroundColor: colors.white,
    borderRadius: 0,
    border: `1px solid ${colors.grey500}`,
    "&:hover": {
      backgroundColor: colors.grey500,
      color: colors.white,
      border: `1px solid ${colors.grey500}`,
      "& .MuiIcon-root": {
        color: colors.white,
      },
    },
  },
  textPrimary: {
    color: colors.primary,
    backgroundColor: colors.white,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: colors.darkRed,
      color: colors.white,
    },
  },
  textSecondary: {
    color: colors.grey500,
    backgroundColor: colors.white,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: colors.grey200,
    },
  },
  // flatPrimary: {
  //   backgroundColor: colors.white,
  //   color: colors.primary,
  //   borderRadius: 0,
  //   '&:hover': {
  //     backgroundColor: colors.lightRed
  //   },
  // },
  // flatSecondary: {
  //   color: colors.grey500,
  //   borderRadius: 0,
  //   '&:hover': {
  //     backgroundColor: colors.grey200,
  //   },
  // },
  // text: {},
  // textSizeSmall: {},
  // textSizeLarge: {},
  // outlinedSizeSmall: {},
  // outlinedSizeLarge: {},
  // containedSizeSmall: {},
  // containedSizeLarge: {},
  // sizeLarge: {},
  // fullWidth: {},
  // startIcon: {},
  // endIcon: {},
  // iconSizeSmall: {},
  // iconSizeMedium: {},
  // iconSizeLarge: {},
};
