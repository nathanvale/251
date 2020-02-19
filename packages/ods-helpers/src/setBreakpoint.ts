import {Breakpoint} from "@origin-digital/ods-types";

const breakpoints = ["xs", "sm", "md", "lg", "xl"];

export interface SetBreakpointProps {
  breakpoint: keyof Breakpoint;
  value1: TS_FIXME;
  value2: TS_FIXME;
}
export const setBreakpoint = ({
  breakpoint,
  value1,
  value2,
}: SetBreakpointProps) => {
  const output = [];

  for (let i = 0; i < breakpoints.length; i++) {
    if (breakpoints[i] === breakpoint) {
      output.push(value2);
      break;
    } else {
      output.push(value1);
    }
  }
  return {
    xs: output[0],
    sm: output[1],
    md: output[2],
    lg: output[3],
    xl: output[4],
  };
};
