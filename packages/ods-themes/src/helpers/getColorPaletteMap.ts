import { ColorPaletteVariants } from "@origin-digital/ods-types";
import { Theme } from "@material-ui/core";

export function getColorPaletteMap(palette: Theme["palette"]) {
  const colorMap: Record<ColorPaletteVariants, string> = {
    white: palette.background.paper,
    disabled: palette.action.disabled,
    error: palette.error.main,
    errorDark: palette.error.dark,
    errorLight: palette.error.light,
    grey100: palette.grey[100],
    grey200: palette.grey[200],
    grey300: palette.grey[300],
    grey400: palette.grey[400],
    grey50: palette.grey[50],
    grey500: palette.grey[500],
    grey600: palette.grey[600],
    info: palette.info.main,
    infoDark: palette.info.dark,
    infoLight: palette.info.light,
    positive: palette.success.main,
    positiveDark: palette.success.dark,
    positiveLight: palette.success.light,
    primary: palette.primary.main,
    primaryB: palette.primaryB.main,
    primaryBDark: palette.primaryB.dark,
    primaryBLight: palette.primaryB.light,
    primaryDark: palette.primary.dark,
    primaryLight: palette.primary.light,
    promoteB: palette.promoteB.main,
    promoteBDark: palette.promoteB.dark,
    promoteBLight: palette.promoteB.light,
    promoteC: palette.promoteC.main,
    promoteCDark: palette.promoteC.dark,
    promoteCLight: palette.promoteC.light,
    secondary: palette.secondary.main,
    secondaryDark: palette.secondary.dark,
    secondaryLight: palette.secondary.light,
    secondaryB: palette.secondaryB.main,
    secondaryBDark: palette.secondaryB.dark,
    secondaryBLight: palette.secondaryB.light,
    success: palette.success.main,
    successDark: palette.success.dark,
    successLight: palette.success.light,
    warning: palette.warning.main,
    warningDark: palette.warning.dark,
    warningLight: palette.warning.light,
    transparent: "transparent",
    promote: palette.info.main,
    promoteLight: palette.info.light,
    promoteDark: palette.info.dark,
    //Tones
    critical: palette.primary.main,
    criticalLight: palette.primary.light,
    criticalDark: palette.primary.dark,
    caution: palette.secondary.main,
    cautionLight: palette.secondary.light,
    cautionDark: palette.secondary.dark,
    neutral: palette.grey[500],
    neutralLight: palette.grey[400],
    neutralDark: palette.grey[600],
  };
  return colorMap;
}
