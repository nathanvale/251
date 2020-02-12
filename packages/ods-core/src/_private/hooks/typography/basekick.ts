import {css} from "styled-components";

interface BaseKickOptions {
  typeSizeModifier: number;
  baseFontSize: number;
  descenderHeightScale: number;
  capHeight: number;
  typeRowSpan: number;
  gridRowHeight: number;
}

export const basekick = ({
  typeSizeModifier,
  baseFontSize,
  descenderHeightScale,
  typeRowSpan,
  gridRowHeight,
  capHeight,
}: BaseKickOptions) => {
  const fontSize = typeSizeModifier * baseFontSize;

  const calculateTypeOffset = (lh: number) => {
    const lineHeightScale = lh / fontSize;
    return (lineHeightScale - 1) / 2 + descenderHeightScale;
  };

  const lineHeight = typeRowSpan * gridRowHeight;
  const typeOffset = calculateTypeOffset(lineHeight);

  const topSpace = lineHeight - capHeight * fontSize;
  const heightCorrection =
    topSpace > gridRowHeight ? topSpace - (topSpace % gridRowHeight) : 0;
  const preventCollapse = 1;

  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    transform: translateY(${typeOffset}em);
    padding-top: 1px;
    &:before {
      content: "";
      margin-top: ${-(heightCorrection + preventCollapse)}px;
      display: block;
      height: 0;
    }
  `;

  // return {
  //   base: {
  //     fontSize: `${fontSize}px`,
  //     lineHeight: `${lineHeight}px`
  //   },
  //   baseline: {
  //     transform: `translateY(${typeOffset}em)`
  //   },
  //   cropFirstLine: {
  //     paddingTop: preventCollapse,
  //     ":before": {
  //       content: "''",
  //       marginTop: -(heightCorrection + preventCollapse),
  //       display: "block",
  //       height: 0
  //     }
  //   }
  // };
};
