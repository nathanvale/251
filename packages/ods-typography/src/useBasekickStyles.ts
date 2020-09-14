import {
  TextVariants,
  Heading12Variants,
  Heading34Variants,
} from "@origin-digital/ods-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { getTypographyForVariant } from "./getTypographyForVariant";

export interface UseBasekickStylesProps {
  variant: TextVariants | Heading12Variants | Heading34Variants;
  inline?: boolean;
}

/**
 * In CSS, the text in a given element will sit centred within its own
 * line-height. In the design world the line height is measured from the
 * baseline of the text. As a result our UIs often deviate from the designers
 * intentions, requiring a heap of pixel-nudging to get things to line up again.
 *
 * This hook gets CSS transforms from our typography theme so we can translate
 * the text back onto the baseline where it should be.
 */
export function useBasekickStyles({ variant, inline }: UseBasekickStylesProps) {
  return makeStyles(
    ({ breakpoints, typography }) => {
      const responsiveFontSize: Record<"h1" | "h2" | "h3", any> = {
        h1: {
          [breakpoints.up("lg")]: {
            fontSize: "56px",
            lineHeight: "64px",
          },
        },
        h2: {
          [breakpoints.up("lg")]: {
            fontSize: "32px",
            lineHeight: "40px",
          },
        },
        h3: {
          [breakpoints.up("lg")]: {
            fontSize: "20px",
            lineHeight: "28px",
          },
        },
      };
      let responsiveBasekick = {};
      if (variant === "h1" || variant === "h2" || variant === "h3") {
        // h1, h2 and h3 have a larger font size at the desktop breakpoint
        responsiveBasekick = responsiveFontSize[variant!];
      }
      return {
        basekick: {
          fontFamily: typography.fontFamily,
          ...getTypographyForVariant(typography)[variant!],
          display: inline ? "inline" : "block",
          ...responsiveBasekick,
        },
      };
    },
    { classNamePrefix: `typography-${variant}-variant` }
  )().basekick;
}
