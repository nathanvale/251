import { Theme } from "@material-ui/core";
import { FontSizeMetrics } from "@origin-digital/ods-types";
import {
  FontSizeVariants,
  BasekickStyles,
} from "@material-ui/core/styles/createTypography";
import { getBasekickStyles } from "../../helpers/getBasekickStyles";
import { breakpoints } from "../core/breakpoints";
import { colors } from "../core/colors";

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

const basekickActive = true;

const getTypography = (basekickActive: boolean): Typography => ({
  fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
  weight: {
    regular: 400,
    medium: 600,
    bold: 700,
  },
  text: {
    xxxxsmall: {
      ...getBasekickStyles(text.xxxxsmall, basekickActive),
    },
    xxxsmall: {
      ...getBasekickStyles(text.xxxsmall, basekickActive, -0.02),
    },
    xxsmall: {
      ...getBasekickStyles(text.xxsmall, basekickActive, 0.05),
    },
    xsmall: {
      ...getBasekickStyles(text.xsmall, basekickActive),
    },
    small: {
      ...getBasekickStyles(text.small, basekickActive),
    },
    medium: {
      ...getBasekickStyles(text.medium, basekickActive),
    },
    large: {
      ...getBasekickStyles(text.large, basekickActive, -0.05),
      [breakpoints.up("md")]: {
        ...getBasekickStyles(text.large, basekickActive, 0.05),
      },
    },
    xlarge: {
      ...getBasekickStyles(text.xlarge, basekickActive),
    },
    xxlarge: {
      ...getBasekickStyles(text.xxlarge, basekickActive),
    },
    xxxlarge: {
      ...getBasekickStyles(text.xxxlarge, basekickActive),
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
      fontWeight: typography.weight.regular,
      ...typography.text.small,
      color: colors.grey[600],
    },
    subtitle2: {
      fontWeight: typography.weight.regular,
      ...typography.text.xsmall,
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
      color: colors.grey[500],
    },
    overline: {
      fontWeight: typography.weight.regular,
      ...typography.text.xxxxsmall,
      color: colors.grey[500],
      textTransform: "uppercase",
    },
    button: {
      ...typography.text.xsmall,
      textTransform: "none",
    },
  };
};

export const muiTypography: Partial<Theme["typography"]> = getMUITypography(
  basekickActive
);
