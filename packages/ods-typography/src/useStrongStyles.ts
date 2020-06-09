import { TypographyWeightVariants } from "@origin-digital/ods-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
/**
 * This style is used in case a user uses html strong instead of our Strong component
 */
export function useStrongStyles(
  weight: Exclude<TypographyWeightVariants, "regular">
) {
  const getWeightVariants = (
    theme: Theme
  ): Record<Exclude<TypographyWeightVariants, "regular">, any> => ({
    medium: { fontWeight: theme.typography.fontWeightMedium },
    bold: { fontWeight: theme.typography.fontWeightBold },
  });
  return makeStyles(
    (theme: Theme) => ({
      "strong-support": {
        "& > strong": getWeightVariants(theme)[weight!],
      },
    }),
    { classNamePrefix: "typography" }
  )()["strong-support"];
}
