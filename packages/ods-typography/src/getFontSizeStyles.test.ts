import { getFontSizeStyles } from "./getFontSizeStyles";
import { getHeightCorrection } from "./getHeightCorrection";

describe("getFontSizeStyles", () => {
  test("it returns styles for xxxsmall", () => {
    const basekickStyles = getFontSizeStyles({
      size: 12,
      rows: 5,
    });
    expect(basekickStyles).toMatchSnapshot();
  });
});

describe("getHeightCorrection", () => {
  test("it returns a height correction", () => {
    const heightCorrection = getHeightCorrection(24, 14, 0.75, 4);
    expect(heightCorrection).toBe(12);
  });
  test("it returns no height correction", () => {
    const heightCorrection = getHeightCorrection(14, 14, 0.75, 4);
    expect(heightCorrection).toBe(0);
  });
});
