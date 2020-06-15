import { palette } from "../mui-themes/core/palette";
import { getColorPaletteMap } from "./getColorPaletteMap";

test("it should return a flattened MUI palette", () => {
  const colorMap = getColorPaletteMap(palette);
  expect(colorMap).toMatchSnapshot();
});
