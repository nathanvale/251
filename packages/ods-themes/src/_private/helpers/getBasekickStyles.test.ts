import { odsMasterTheme } from "../odsMasterTheme";
import {
  getBasekickStyles,
  calculateTypeOffset,
  getHeightCorrection,
} from "./getBasekickStyles";

const masterText = odsMasterTheme.typography.text;

describe("getBasekickStyles", () => {
  test("it returns styles for xxxsmall", () => {
    const basekickStyles = getBasekickStyles(masterText.xxxsmall);
    expect(basekickStyles).toMatchSnapshot();
  });
});

describe("calculateTypeOffset", () => {
  test("it returns the correct offset with 24px line-height and 14px font-size", () => {
    const typeOffset = calculateTypeOffset(24, 14);
    expect(typeOffset).toBe(0.4671428571428571);
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
