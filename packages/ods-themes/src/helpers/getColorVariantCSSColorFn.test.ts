import { palette } from "../mui-themes/core/palette";
import { getColorVariantCSSColorFn } from "./getColorVariantCSSColorFn";

test("it should return a function that can get a color variant", () => {
  const getColorPaletteVariant = getColorVariantCSSColorFn(palette);
  const colorMap = getColorPaletteVariant("neutralDark");
  expect(colorMap).toBe("#232323");
});
