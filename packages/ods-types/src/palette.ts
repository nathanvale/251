import type {
  PaletteColor,
  TypeBackground,
} from "@material-ui/core/styles/createPalette";
import type { Color } from "@material-ui/core";
import type { Typography as MUITypography } from "@material-ui/core/styles/createTypography";
import type { Space } from "./layout";
import type { Breakpoint, Breakpoints } from "./responsive";

export interface Transform {
  touchable: string;
}
export type TransformVariants = keyof Transform;
export interface Transition {
  fast: string;
}
export type TransitionVariants = keyof Transition;

export interface Palette {
  caution: PaletteColor;
  critical: PaletteColor;
  grey: Color;
  info: PaletteColor;
  positive: PaletteColor;
  primary: PaletteColor;
  primaryB: PaletteColor;
  promote: PaletteColor;
  promoteB: PaletteColor;
  secondary: PaletteColor;
  secondaryB: PaletteColor;
  background: TypeBackground;
}

export interface Colors {
  backgroundDefault: string;
  backgroundPaper: string;
  caution: string;
  cautionDark: string;
  cautionLight: string;
  critical: string;
  criticalDark: string;
  criticalLight: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey50: string;
  grey500: string;
  grey600: string;
  info: string;
  infoDark: string;
  infoLight: string;
  positive: string;
  positiveDark: string;
  positiveLight: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primaryB: string;
  primaryBDark: string;
  primaryBLight: string;
  promote: string;
  promoteDark: string;
  promoteLight: string;
  promoteB: string;
  promoteBDark: string;
  promoteBLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  secondaryB: string;
  secondaryBDark: string;
  secondaryBLight: string;
  white: string;
  transparent: string;
}

export interface ColorPalette {
  //Mui Colors
  disabled: string;
  error: string;
  errorDark: string;
  errorLight: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey50: string;
  grey500: string;
  grey600: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primaryB: string;
  primaryBDark: string;
  primaryBLight: string;
  secondaryB: string;
  secondaryBDark: string;
  secondaryBLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  success: string;
  successDark: string;
  successLight: string;
  transparent: string;
  warning: string;
  warningDark: string;
  warningLight: string;
  white: string;
  // tones
  critical: string;
  criticalLight: string;
  criticalDark: string;
  caution: string;
  cautionLight: string;
  cautionDark: string;
  positive: string;
  positiveLight: string;
  positiveDark: string;
  info: string;
  infoLight: string;
  infoDark: string;
  neutral: string;
  neutralLight: string;
  neutralDark: string;
  promote: string;
  promoteLight: string;
  promoteDark: string;
  promoteB: string;
  promoteBLight: string;
  promoteBDark: string;
}

export type Tones = Pick<
  ColorPalette,
  | "critical"
  | "criticalLight"
  | "criticalDark"
  | "caution"
  | "cautionLight"
  | "cautionDark"
  | "positive"
  | "positiveLight"
  | "positiveDark"
  | "info"
  | "infoLight"
  | "infoDark"
  | "neutral"
  | "neutralLight"
  | "neutralDark"
  | "promote"
  | "promoteLight"
  | "promoteDark"
  | "promoteB"
  | "promoteBLight"
  | "promoteBDark"
>;

export type ToneVariants = keyof Tones;

export type ColorPaletteVariants = keyof ColorPalette;

export type ColorVariants = keyof Colors;

// grey300 is for information icon
export type SvgIconColorVariants =
  | keyof Pick<
      ColorPalette,
      | "caution"
      | "critical"
      | "disabled"
      | "grey300"
      | "info"
      | "neutral"
      | "neutralDark"
      | "neutralLight"
      | "positive"
      | "positiveLight"
      | "primary"
      | "primaryB"
      | "promote"
      | "promoteB"
      | "secondary"
      | "secondaryB"
      | "white"
    >
  | "inherit";

export type BackgroundColorVariants = ColorPaletteVariants;

export type TextToneVariants =
  | keyof Pick<Tones, "critical" | "positive">
  | "neutral"
  | "neutralLight"
  | "neutralDark";

export interface Theme {
  space: Space;
  gridGutterWidth: 16 | 32;
  section: { maxWidth: Breakpoint<number> };
  breakpoints?: Breakpoints;
  transitions: Transition;
  colors?: Record<ColorPaletteVariants, string>;
  typography?: MUITypography;
}
