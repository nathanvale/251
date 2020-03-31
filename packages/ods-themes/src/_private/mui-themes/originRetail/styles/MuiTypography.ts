import { colors } from "../colors";
import { typography } from "../typography";

export const MuiTypography = {
  fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
  root: {
    color: colors.grey600,
    fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
  },
  h1: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxlarge,
    color: colors.grey600,
  },
  h2: {
    fontWeight: typography.weight.regular,
    ...typography.text.large,
    color: colors.grey600,
  },
  h3: {
    fontWeight: typography.weight.medium,
    ...typography.text.small,
    color: colors.grey600,
  },
  h4: {
    fontWeight: typography.weight.medium,
    ...typography.text.xsmall,
    color: colors.grey600,
  },
  h5: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxxlarge,
    color: colors.grey600,
  },
  h6: {
    fontWeight: typography.weight.regular,
    ...typography.text.xlarge,
    color: colors.grey600,
  },
  subtitle1: {
    fontWeight: typography.weight.medium,
    ...typography.text.medium,
    color: colors.grey600,
  },
  subtitle2: {
    fontWeight: typography.weight.medium,
    ...typography.text.medium,
    color: colors.grey600,
  },
  body1: {
    fontWeight: typography.weight.regular,
    ...typography.text.small,
    color: colors.grey600,
  },
  body2: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxsmall,
    color: colors.grey500,
  },
  caption: {
    fontWeight: typography.weight.regular,
    ...typography.text.xxxsmall,
    color: colors.grey400,
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
