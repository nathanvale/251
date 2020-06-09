import { TypographyWeightVariants } from "@origin-digital/ods-types";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";

/**
 * Used for applying font weights.
 */
export function useWeightStyles(weight: TypographyWeightVariants) {
  const getWeightVariants = (
    theme: Theme
  ): Record<TypographyWeightVariants, React.CSSProperties["fontWeight"]> => ({
    regular: theme.typography.fontWeightRegular,
    medium: theme.typography.fontWeightMedium,
    bold: theme.typography.fontWeightBold,
  });
  return makeStyles(
    (theme: Theme) => ({
      weight: {
        fontWeight: getWeightVariants(theme)[weight],
      },
    }),
    { classNamePrefix: `typography-${weight}` }
  )().weight;
}
