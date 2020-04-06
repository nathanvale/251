import { FontSizeMetrics } from "@origin-digital/ods-types";
import { BasekickStyles } from "@material-ui/core/styles/createTypography";
import { odsMasterTheme } from "../odsMasterTheme";

const {
  gridRow,
  capHeightScale,
  descenderHeightScale,
} = odsMasterTheme.typography;

export const calculateTypeOffset = (lineHeight: number, fontSize: number) => {
  const lineHeightScale = lineHeight / fontSize;
  return (lineHeightScale - 1) / 2 + descenderHeightScale;
};

export const getHeightCorrection = (
  lineHeight: number,
  fontSize: number,
  capHeightScale: number,
  gridRow: number,
) => {
  const topSpace = lineHeight - capHeightScale * fontSize;
  return topSpace > gridRow ? topSpace - (topSpace % gridRow) : 0;
};

export function getBasekickStyles(
  fontSizeValue: FontSizeMetrics,
  adjustY: number = 0,
): BasekickStyles {
  const baseFontSize = 1;
  const fontSize = fontSizeValue.size * baseFontSize;
  const lineHeight = fontSizeValue.rows * gridRow;
  const typeOffset = calculateTypeOffset(lineHeight, fontSize) + adjustY;
  const heightCorrection = getHeightCorrection(
    lineHeight,
    fontSize,
    capHeightScale,
    gridRow,
  );

  const preventCollapse = 1;

  const transform = `translateY(${typeOffset}em)`;

  return {
    fontSize: fontSizeValue.size,
    lineHeight: `${fontSizeValue.rows * gridRow}px`,
    transform,
    "-webkit-transform": transform,
    "-ms-transform": transform,
    "padding-top": "1px",
    margin: 0,
    verticalAlign: "baseline",
    "&::before": {
      content: '""',
      marginTop: `${-(heightCorrection + preventCollapse)}px`,
      display: "block",
      height: 0,
    },
  };
}
