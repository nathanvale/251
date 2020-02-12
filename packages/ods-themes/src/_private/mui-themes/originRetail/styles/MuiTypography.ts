import {colors} from "../colors";
import {typography} from "../typography";

export const MuiTypography = {
  fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
  root: {
    color: colors.grey56,
    fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
  },
  h1: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxlarge,
    color: colors.grey56,
  },
  h2: {
    fontWeight: typography.weight.regular,
    ...typography.text.large,
    color: colors.grey56,
  },
  h3: {
    fontWeight: typography.weight.medium,
    ...typography.text.small,
    color: colors.grey56,
  },
  h4: {
    fontWeight: typography.weight.medium,
    ...typography.text.xsmall,
    color: colors.grey56,
  },
  h5: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxxlarge,
    color: colors.grey56,
  },
  h6: {
    fontWeight: typography.weight.regular,
    ...typography.text.xlarge,
    color: colors.grey56,
  },
  subtitle1: {
    fontWeight: typography.weight.medium,
    ...typography.text.medium,
    color: colors.grey56,
  },
  subtitle2: {
    fontWeight: typography.weight.medium,
    ...typography.text.medium,
    color: colors.grey56,
  },
  body1: {
    fontWeight: typography.weight.regular,
    ...typography.text.small,
    color: colors.grey56,
  },
  body2: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxsmall,
    color: colors.grey,
  },
  caption: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxxsmall,
    color: colors.grey80,
  },
  overline: {
    fontWeight: typography.weight.regular,
    ...typography.text.medium,
    color: "#232323",
    textTransform: "none",
  },
  colorTextSecondary: {
    color: `${colors.white} !important`,
  },
  // button: {},
  // alignCenter: {},
  // alignJustify: {},
  // alignRight: {},
  // alignLeft: {},
  // noWrap: {},
  // paragraph: {},
  // colorInherit: {},
  // colorPrimary: {},
  // colorSecondary: {},
  // colorTextPrimary: {},
  // colorError: {},
  // displayInline: {},
  // displayBlock: {},
  // gutterBottom: {},
  // srOnly: {}
};
