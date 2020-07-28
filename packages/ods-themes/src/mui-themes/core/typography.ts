import { Theme } from "@material-ui/core";
import { FontSizeMetrics } from "@origin-digital/ods-types";
import {
  FontSizeVariants,
  BasekickStyles,
} from "@material-ui/core/styles/createTypography";
import { getFontSizeStyles } from "@origin-digital/ods-typography";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";

interface Typography {
  fontFamily: string;
  weight: { regular: number; medium: number; bold: number };
  text: Record<FontSizeVariants, BasekickStyles>;
}

const text: Record<FontSizeVariants, FontSizeMetrics> = {
  xxxxsmall: {
    size: 10,
    rows: 5,
  },
  xxxsmall: {
    size: 12,
    rows: 5,
  },
  xxsmall: {
    size: 14,
    rows: 6,
  },
  xsmall: {
    size: 16,
    rows: 6,
  },
  small: {
    size: 18,
    rows: 6,
  },
  medium: {
    size: 20,
    rows: 7,
  },
  large: {
    size: 24,
    rows: 7,
  },
  xlarge: {
    size: 32,
    rows: 10,
  },
  xxlarge: {
    size: 36,
    rows: 10,
  },
  xxxlarge: {
    size: 56,
    rows: 16,
  },
};

const getTypography = (basekickActive: boolean): Typography => ({
  fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
  weight: {
    regular: 400,
    medium: 600,
    bold: 700,
  },
  text: {
    xxxxsmall: {
      ...getFontSizeStyles(text.xxxxsmall, basekickActive),
    },
    xxxsmall: {
      ...getFontSizeStyles(text.xxxsmall, basekickActive, -0.02),
    },
    xxsmall: {
      ...getFontSizeStyles(text.xxsmall, basekickActive, 0.05),
    },
    xsmall: {
      ...getFontSizeStyles(text.xsmall, basekickActive),
    },
    small: {
      ...getFontSizeStyles(text.small, basekickActive),
    },
    medium: {
      ...getFontSizeStyles(text.medium, basekickActive),
    },
    large: {
      ...getFontSizeStyles(text.large, basekickActive, -0.05),
      [breakpoints.up("md")]: {
        ...getFontSizeStyles(text.large, basekickActive, 0.05),
      },
    },
    xlarge: {
      ...getFontSizeStyles(text.xlarge, basekickActive),
    },
    xxlarge: {
      ...getFontSizeStyles(text.xxlarge, basekickActive),
    },
    xxxlarge: {
      ...getFontSizeStyles(text.xxxlarge, basekickActive),
    },
  },
});

export const getMUITypography = (
  basekickActive: boolean
): Partial<Theme["typography"]> => {
  const typography = getTypography(basekickActive);
  return {
    fontFamily: typography.fontFamily,
    fontWeightMedium: typography.weight.medium,
    fontWeightRegular: typography.weight.regular,
    fontWeightBold: typography.weight.bold,
    basekickActive,
    h1: {
      fontWeight: typography.weight.regular,
      ...typography.text.xxlarge,
      color: colors.grey[600],
      textTransform: "none",
    },
    h2: {
      fontWeight: typography.weight.regular,
      ...typography.text.large,
      color: colors.grey[600],
      textTransform: "none",
    },
    h3: {
      fontWeight: typography.weight.medium,
      ...typography.text.small,
      color: colors.grey[600],
      textTransform: "none",
    },
    h4: {
      fontWeight: typography.weight.medium,
      ...typography.text.xsmall,
      color: colors.grey[600],
      textTransform: "none",
    },
    h5: {
      fontWeight: typography.weight.medium,
      ...typography.text.xsmall,
      color: colors.grey[600],
      textTransform: "none",
    },
    h6: {
      fontWeight: typography.weight.medium,
      ...typography.text.xsmall,
      color: colors.grey[600],
      textTransform: "none",
    },
    subtitle1: {
      fontWeight: typography.weight.regular,
      ...typography.text.small,
      color: colors.grey[600],
      textTransform: "none",
    },
    subtitle2: {
      fontWeight: typography.weight.regular,
      ...typography.text.xsmall,
      color: colors.grey[600],
      textTransform: "none",
    },
    body1: {
      fontWeight: typography.weight.regular,
      ...typography.text.xxsmall,
      color: colors.grey[500],
      textTransform: "none",
    },
    body2: {
      fontWeight: typography.weight.regular,
      ...typography.text.xxxsmall,
      color: colors.grey[500],
      textTransform: "none",
    },
    caption: {
      fontWeight: typography.weight.regular,
      ...typography.text.xxxsmall,
      color: colors.grey[500],
      textTransform: "none",
    },
    overline: {
      fontWeight: typography.weight.regular,
      ...typography.text.xxxxsmall,
      color: colors.grey[500],
      textTransform: "uppercase",
    },
    button: {
      ...getFontSizeStyles(text.xsmall, false),
      textTransform: "none",
    },
  };
};
