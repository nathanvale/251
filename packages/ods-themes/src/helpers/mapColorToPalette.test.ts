import { ColorPaletteVariants } from "@origin-digital/ods-types";
import { palette } from "../mui-themes/core/palette";
import { mapColorToPalette } from "./mapColorToPalette";

describe("mapColorToPalette", () => {
  const testData = [
    ["white", "white"],
    ["disabled", "#e3e3e3"],
    ["secondaryB", "#505050"],
    ["secondaryBLight", "#737373"],
    ["secondaryBDark", "#383838"],
    ["grey50", "#f8f8f8"],
    ["grey100", "#f1f1f1"],
    ["grey200", "#e3e3e3"],
    ["grey300", "#ababab"],
    ["grey400", "#737373"],
    ["grey500", "#505050"],
    ["grey600", "#232323"],
    ["primary", "#ec0000"],
    ["primaryLight", "#ef3333"],
    ["primaryDark", "#a50000"],
    ["secondary", "#ffb432"],
    ["secondaryLight", "#ffc35b"],
    ["secondaryDark", "#b27d23"],
    ["success", "#008906"],
    ["successLight", "#a5bb48"],
    ["successDark", "#005f04"],
    ["info", "#0a5fd2"],
    ["infoLight", "#3b7fdb"],
    ["infoDark", "#074293"],
    ["warning", "#ffb432"],
    ["warningLight", "#ffc35b"],
    ["warningDark", "#b27d23"],
    ["error", "#ec0000"],
    ["errorLight", "#ef3333"],
    ["errorDark", "#a50000"],
    ["positive", "#008906"],
    ["positiveLight", "#a5bb48"],
    ["positiveDark", "#005f04"],
    ["disabled", "#e3e3e3"],
    ["primaryB", "#fa4616"],
    ["primaryBLight", "#fb6b44"],
    ["primaryBDark", "#af310f"],
    ["promoteB", "#c34789"],
    ["promoteBLight", "#cf6ba0"],
    ["promoteBDark", "#88315f"],
  ] as const;

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(mapColorToPalette(palette)(props as ColorPaletteVariants)).toEqual(
      expected
    );
  });
});
