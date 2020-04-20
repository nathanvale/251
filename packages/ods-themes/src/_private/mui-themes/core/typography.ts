import { Theme } from "@material-ui/core";
import { FontSizeMetrics } from "@origin-digital/ods-types";
import {
  FontSizeVariants,
  BasekickStyles,
} from "@material-ui/core/styles/createTypography";
import { getBasekickStyles } from "../../helpers/getBasekickStyles";
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

export const typography: Typography = {
  fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
  weight: {
    regular: 400,
    medium: 600,
    bold: 700,
  },
  text: {
    xxxxsmall: {
      ...getBasekickStyles(text.xxxxsmall),
    },
    xxxsmall: {
      ...getBasekickStyles(text.xxxsmall, -0.02),
    },
    xxsmall: {
      ...getBasekickStyles(text.xxsmall, 0.05),
    },
    xsmall: {
      ...getBasekickStyles(text.xsmall),
    },
    small: {
      ...getBasekickStyles(text.small),
    },
    medium: {
      ...getBasekickStyles(text.medium),
    },
    large: {
      ...getBasekickStyles(text.large, -0.05),
      [breakpoints.up("md")]: {
        ...getBasekickStyles(text.large, 0.05),
      },
    },
    xlarge: {
      ...getBasekickStyles(text.xlarge),
    },
    xxlarge: {
      ...getBasekickStyles(text.xxlarge),
    },
    xxxlarge: {
      ...getBasekickStyles(text.xxxlarge),
    },
  },
};

export const muiTypography: Partial<Theme["typography"]> = {
  fontFamily: typography.fontFamily,
  fontWeightMedium: typography.weight.medium,
  fontWeightRegular: typography.weight.regular,
  fontWeightBold: typography.weight.bold,
  text: typography.text,
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
};
