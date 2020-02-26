import {resolveResponsiveRangeProps} from "./responsiveRangeProps";

describe("resolveResponsiveRangeProps", () => {
  const testData = [
    [{}, [false, false, false, false, false]],
    [{above: "xs"}, [false, true, true, true, true]],
    [{above: "md"}, [false, false, false, true, true]],
    [{below: "lg"}, [true, true, true, false, false]],
    [{below: "xl"}, [true, true, true, true, false]],
    [{above: "xs", below: "lg"}, [false, true, true, false, false]],
  ] as const;

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(resolveResponsiveRangeProps(props)).toEqual(expected);
  });
});
