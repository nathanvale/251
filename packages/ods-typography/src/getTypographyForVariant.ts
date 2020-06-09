import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { TypographyVariants } from "@origin-digital/ods-types";
import { CSSProperties } from "react";
/**
 * Maps our Text and Heading component variants to the MUI typography theme
 */
export function getTypographyForVariant(
  typography: Theme["typography"]
): Record<TypographyVariants, CSSProperties> {
  return {
    body: typography.body1,
    "body-small": typography.body2,
    "overline-text": typography.overline,
    "subtitle-small": typography.subtitle2,
    subtitle: typography.subtitle1,
    caption: typography.caption,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
  };
}
