import { FontSizeMetrics } from "@origin-digital/ods-types";
import { BasekickStyles } from "@material-ui/core/styles/createTypography";
import { calculateTypeOffset } from "./calculateTypeOffset";
import { getHeightCorrection } from "./getHeightCorrection";

const baseKickMetrics = {
  descenderHeightScale: 0.11,
  capHeightScale: 0.75,
  gridRow: 4,
};
const { gridRow, capHeightScale, descenderHeightScale } = baseKickMetrics;

export function getFontSizeStyles(
  fontSizeValue: FontSizeMetrics,
  basekickActive: boolean = false,
  adjustY: number = 0
): BasekickStyles {
  const baseFontSize = 1;
  const fontSize = fontSizeValue.size * baseFontSize;
  const lineHeight = fontSizeValue.rows * gridRow;
  const typeOffset =
    calculateTypeOffset(lineHeight, fontSize, descenderHeightScale) + adjustY;
  const heightCorrection = getHeightCorrection(
    lineHeight,
    fontSize,
    capHeightScale,
    gridRow
  );

  const preventCollapse = 1;

  const transform = basekickActive ? `translateY(${typeOffset}em)` : undefined;
  return {
    fontSize: fontSizeValue.size,
    lineHeight: `${fontSizeValue.rows * gridRow}px`,
    margin: 0,
    verticalAlign: basekickActive ? "baseline" : undefined,
    "-webkit-transform": transform,
    "-ms-transform": transform,
    transform,
    "padding-top": basekickActive ? "1px" : undefined,
    "&::before": basekickActive
      ? {
          content: '""',
          marginTop: `${-(heightCorrection + preventCollapse)}px`,
          display: "block",
          height: 0,
        }
      : undefined,
  };
}
