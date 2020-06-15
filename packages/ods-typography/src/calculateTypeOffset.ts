export const calculateTypeOffset = (
  lineHeight: number,
  fontSize: number,
  descenderHeightScale: number
) => {
  const lineHeightScale = lineHeight / fontSize;
  return (lineHeightScale - 1) / 2 + descenderHeightScale;
};
