import { Theme } from "@material-ui/core";
import { colors } from "./colors";

export const typography = {
  fontFamily: "gordita, sans-serif",
  fontStyle: {
    regular: "Regular",
    medium: "Medium",
  },
  weight: {
    regular: 400,
    medium: 600,
  },
  text: {
    xxxsmall: {
      fontSize: 12,
      lineHeight: "20px",
    },
    xxsmall: {
      fontSize: 14,
      lineHeight: "24px",
    },
    xsmall: {
      fontSize: 16,
      lineHeight: "24px",
    },
    small: {
      fontSize: 18,
      lineHeight: "24px",
    },
    medium: {
      fontSize: 20,
      lineHeight: "28px",
    },
    large: {
      fontSize: 24,
      lineHeight: "28px",
    },
    xlarge: {
      fontSize: 32,
      lineHeight: "40px",
    },
    xxlarge: {
      fontSize: 36,
      lineHeight: "40px",
    },
    xxxlarge: {
      fontSize: 56,
      lineHeight: "64px",
    },
  },
};

export const muiTypography: Partial<Theme["typography"]> = {
  fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
  fontWeightMedium: 600,
  h1: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxlarge,
    color: colors.grey[600],
  },
  h2: {
    fontWeight: typography.weight.regular,
    ...typography.text.large,
    color: colors.grey[600],
  },
  h3: {
    fontWeight: typography.weight.medium,
    ...typography.text.small,
    color: colors.grey[600],
  },
  h4: {
    fontWeight: typography.weight.medium,
    ...typography.text.xsmall,
    color: colors.grey[600],
  },
  h5: {
    fontWeight: typography.weight.medium,
    ...typography.text.xsmall,
    color: colors.grey[600],
  },
  h6: {
    fontWeight: typography.weight.medium,
    ...typography.text.xsmall,
    color: colors.grey[600],
  },
  subtitle1: {
    fontWeight: typography.weight.medium,
    ...typography.text.medium,
    color: colors.grey[600],
  },
  subtitle2: {
    fontWeight: typography.weight.medium,
    ...typography.text.medium,
    color: colors.grey[600],
  },
  body1: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxsmall,
    color: colors.grey[500],
  },
  body2: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxxsmall,
    color: colors.grey[500],
  },
  caption: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxxsmall,
    color: colors.grey[400],
  },
  overline: {
    fontWeight: typography.weight.regular,
    ...typography.text.medium,
    color: colors.grey[600],
    textTransform: "none",
  },
};
