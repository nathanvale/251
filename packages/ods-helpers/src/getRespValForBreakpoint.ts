import { Breakpoint, ResponsiveProp } from "@origin-digital/ods-types";
import { normaliseObjectResponsiveProp } from "./normaliseObjectResponsiveProp";

const breakpoints: (keyof Breakpoint)[] = ["xs", "sm", "md", "lg", "xl"];

export interface RespValForBreakpointProps {
  breakpoint: keyof Breakpoint;
  valOnBelow: ResponsiveProp<any>;
  valOnAbove: ResponsiveProp<any>;
}

/**
 * This function receives a breakpoint and two values (valOnBelow and valOnAbove).
 * It returns a responsive object of this format:
 *  {xs: T; sm: T; md: T; lg: T; l: T}
 * The values of breakpoints smaller than the given breakpoint are copied from valOnBelow and the rest from
 * valOnAbove.
 * valOnBelow and valOnAbove are also responsiveProps, i.e. T | [T, T] | {xs: T; sm: T; md: T; lg: T; l: T}
 * @param breakpoint
 * @param valOnBelow
 * @param valOnAbove
 */
export const getRespValForBreakpoint = ({
  breakpoint,
  valOnBelow,
  valOnAbove,
}: RespValForBreakpointProps) => {
  const belowValObj = normaliseObjectResponsiveProp(valOnBelow);
  const aboveValObj = normaliseObjectResponsiveProp(valOnAbove);

  const result = {
    ...aboveValObj,
  };

  for (let i = 0; i < breakpoints.length; i++) {
    if (breakpoints[i] === breakpoint) {
      break;
    }
    result[breakpoints[i]] = belowValObj[breakpoints[i]];
  }

  return result;
};
