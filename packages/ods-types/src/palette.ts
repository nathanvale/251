import {
  PaletteColor,
  TypeBackground,
} from "@material-ui/core/styles/createPalette";
import { Color } from "@material-ui/core";

export type ToneVariants = keyof Palette;
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
