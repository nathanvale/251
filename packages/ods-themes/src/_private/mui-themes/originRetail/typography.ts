import {
  FontSizeVariants,
  BasekickStyles,
} from "@material-ui/core/styles/createTypography";
import { odsMasterTheme } from "../../odsMasterTheme";
import { getBasekickStyles } from "../../helpers/getBasekickStyles";

const masterText = odsMasterTheme.typography.text;

const text: Record<FontSizeVariants, BasekickStyles> = {
  xxxxsmall: {
    ...getBasekickStyles(masterText.xxxxsmall),
  },
  xxxsmall: {
    ...getBasekickStyles(masterText.xxxsmall),
  },
  xxsmall: {
    ...getBasekickStyles(masterText.xxsmall),
  },
  xsmall: {
    ...getBasekickStyles(masterText.xsmall),
  },
  small: {
    ...getBasekickStyles(masterText.small),
  },
  medium: {
    ...getBasekickStyles(masterText.medium),
  },
  large: {
    ...getBasekickStyles(masterText.large),
  },
  xlarge: {
    ...getBasekickStyles(masterText.xlarge),
  },
  xxlarge: {
    ...getBasekickStyles(masterText.xxlarge),
  },
  xxxlarge: {
    ...getBasekickStyles(masterText.xxxlarge),
  },
};

export const typography = {
  ...odsMasterTheme.typography,
  fontStyle: {
    regular: "Regular",
    medium: "Medium",
  },
  text,
};
