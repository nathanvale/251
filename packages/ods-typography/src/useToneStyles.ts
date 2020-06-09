import { ColorVariants } from "@origin-digital/ods-types";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

interface ColorAliases {
  [key: string]: ColorVariants;
}

const colorAliases: ColorAliases = {
  "neutral.light": "grey400",
  neutral: "grey500",
  "neutral.dark": "grey600",
};

/**
 * Used for applying text color. Aliases can be used as defined in colorAliases above.
 */
export function useToneStyles({
  tone = "neutral",
}: {
  tone: ColorVariants | keyof ColorAliases;
}) {
  const { colors } = useTheme<Theme>();
  const colorAlias = colorAliases[tone];
  const color = colorAlias ? colors[colorAlias] : colors[tone];
  return makeStyles(
    {
      color: {
        color,
      },
    },
    { classNamePrefix: `typography-${tone}` }
  )().color;
}
