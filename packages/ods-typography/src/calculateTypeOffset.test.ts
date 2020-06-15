import { calculateTypeOffset } from "./calculateTypeOffset";

describe("calculateTypeOffset", () => {
  test("it returns the correct offset with 24px line-height and 14px font-size", () => {
    const typeOffset = calculateTypeOffset(24, 14, 0.11);
    expect(typeOffset).toBe(0.4671428571428571);
  });
});
