import { Theme } from "@material-ui/core";
import { ColorPaletteVariants } from "@origin-digital/ods-types";
import { getColorPalletteMap } from "./getColorPalletteMap";

export const mapColorToPalette = (palette: Theme["palette"]) => (
  variant: ColorPaletteVariants
) => {
  return getColorPalletteMap(palette)[variant];
};
