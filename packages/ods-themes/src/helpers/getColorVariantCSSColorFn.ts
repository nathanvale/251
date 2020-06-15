import { Theme } from "@material-ui/core";
import { ColorPaletteVariants } from "@origin-digital/ods-types";
import { getColorPaletteMap } from "./getColorPaletteMap";

export const getColorVariantCSSColorFn = (palette: Theme["palette"]) => (
  variant: ColorPaletteVariants
) => {
  return getColorPaletteMap(palette)[variant];
};
