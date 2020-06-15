import { ToneVariants } from "@origin-digital/ods-types";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

/**
 * Used for applying text color. Aliases can be used as defined in colorAliases above.
 */
export function useToneStyles({ tone = "neutral" }: { tone: ToneVariants }) {
  const { palette } = useTheme<Theme>();
  const color = palette.getColorVariantCSSColor(tone);
  return makeStyles(
    {
      color: {
        color,
      },
    },
    { classNamePrefix: `typography-${tone}` }
  )().color;
}
