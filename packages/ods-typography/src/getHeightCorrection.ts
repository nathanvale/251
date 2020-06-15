export const getHeightCorrection = (
  lineHeight: number,
  fontSize: number,
  capHeightScale: number,
  gridRow: number
) => {
  const topSpace = lineHeight - capHeightScale * fontSize;
  return topSpace > gridRow ? topSpace - (topSpace % gridRow) : 0;
};
