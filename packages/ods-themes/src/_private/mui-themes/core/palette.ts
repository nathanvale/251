import { createMuiTheme, Theme } from "@material-ui/core";
import {
  lighten,
  darken,
  getContrastRatio,
  rgbToHex,
} from "@material-ui/core/styles/colorManipulator";
import {
  PaletteColor,
  light,
  dark,
} from "@material-ui/core/styles/createPalette";
import { colors } from "./colors";

function getContrastText(background: string, contrastThreshold: number = 3) {
  const contrastText =
    getContrastRatio(background, dark.text.primary) >= contrastThreshold
      ? dark.text.primary
      : light.text.primary;
  return contrastText;
}

function getPaletteColor(
  color: string,
  tonalOffset: number = 0.2
): PaletteColor {
  return {
    main: color,
    light: rgbToHex(lighten(color, tonalOffset)),
    dark: rgbToHex(darken(color, tonalOffset * 1.5)),
    contrastText: getContrastText(color),
  };
}

/**
 * https://app.zeplin.io/project/5bd63fe92a346c09fa382ecf/screen/5e7423961f0f53012d12f03d
 */

export const palette: Theme["palette"] = createMuiTheme({
  palette: {
    critical: getPaletteColor(colors.red),
    secondaryB: getPaletteColor(colors.grey[500]),
    grey: colors.grey,
    background: {
      default: colors.grey[100],
      paper: "white",
      light: colors.grey[50],
    },
    primary: getPaletteColor(colors.red),
    secondary: getPaletteColor(colors.lightOrange),
    success: getPaletteColor(colors.green),
    info: getPaletteColor(colors.blue),
    warning: getPaletteColor(colors.lightOrange),
    error: getPaletteColor(colors.red),
    caution: getPaletteColor(colors.lightOrange),
    positive: getPaletteColor(colors.green),
    action: {
      hoverOpacity: 0.2,
      disabled: colors.grey[200],
    },
    primaryB: getPaletteColor(colors.darkOrange),
    promote: getPaletteColor(colors.blue),
    promoteB: getPaletteColor(colors.purple),
    text: {
      primary: colors.grey[500],
      secondary: colors.grey[400],
      disabled: colors.grey[300],
    },
  },
}).palette;
