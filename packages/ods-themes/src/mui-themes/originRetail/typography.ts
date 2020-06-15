import {
  FontSizeVariants,
  BasekickStyles,
} from "@material-ui/core/styles/createTypography";
import { getFontSizeStyles } from "@origin-digital/ods-typography";

const text: Record<FontSizeVariants, BasekickStyles> = {
  xxxxsmall: {
    ...getFontSizeStyles({
      size: 10,
      rows: 5,
    }),
  },
  xxxsmall: {
    ...getFontSizeStyles({
      size: 12,
      rows: 5,
    }),
  },
  xxsmall: {
    ...getFontSizeStyles({
      size: 14,
      rows: 6,
    }),
  },
  xsmall: {
    ...getFontSizeStyles({
      size: 16,
      rows: 6,
    }),
  },
  small: {
    ...getFontSizeStyles({
      size: 18,
      rows: 6,
    }),
  },
  medium: {
    ...getFontSizeStyles({
      size: 20,
      rows: 7,
    }),
  },
  large: {
    ...getFontSizeStyles({
      size: 24,
      rows: 7,
    }),
  },
  xlarge: {
    ...getFontSizeStyles({
      size: 32,
      rows: 10,
    }),
  },
  xxlarge: {
    ...getFontSizeStyles({
      size: 36,
      rows: 10,
    }),
  },
  xxxlarge: {
    ...getFontSizeStyles({
      size: 56,
      rows: 16,
    }),
  },
};

export const typography = {
  fontFamily: "gordita, sans-serif",
  descenderHeightScale: 0.11,
  capHeightScale: 0.75,
  gridRow: 4,
  weight: {
    regular: 500,
    medium: 600,
  },
  fontStyle: {
    regular: "Regular",
    medium: "Medium",
  },
  text,
};
