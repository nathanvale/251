import {setBreakpoint, SetBreakpointProps} from "./setBreakpoint";

describe("setBreakpoint", () => {
  const testData: [SetBreakpointProps, any][] = [
    [
      {breakpoint: "lg", value1: 0, value2: 5},
      {lg: 5, md: 0, sm: 0, xl: undefined, xs: 0},
    ],
    [
      {breakpoint: "sm", value1: 5, value2: 0},
      {lg: undefined, md: undefined, sm: 0, xl: undefined, xs: 5},
    ],
    [
      {breakpoint: "xl", value1: 2, value2: 1},
      {lg: 2, md: 2, sm: 2, xl: 1, xs: 2},
    ],
  ];

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(setBreakpoint(props)).toEqual(expected);
  });
});
