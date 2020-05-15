import {
  getRespValForBreakpoint,
  RespValForBreakpointProps,
} from "./getRespValForBreakpoint";

describe("getRespValForBreakpoint", () => {
  const testData: [RespValForBreakpointProps, any][] = [
    [
      { breakpoint: "lg", valOnBelow: 0, valOnAbove: 5 },
      { lg: 5, md: 0, sm: 0, xl: 5, xs: 0 },
    ],
    [
      { breakpoint: "sm", valOnBelow: 5, valOnAbove: 0 },
      { lg: 0, md: 0, sm: 0, xl: 0, xs: 5 },
    ],
    [
      { breakpoint: "xl", valOnBelow: 2, valOnAbove: 1 },
      { lg: 2, md: 2, sm: 2, xl: 1, xs: 2 },
    ],
  ];

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(getRespValForBreakpoint(props)).toEqual(expected);
  });
});
