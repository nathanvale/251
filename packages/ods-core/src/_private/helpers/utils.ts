import {Breakpoint} from 'styled-components';

type ValueType = boolean | null | undefined | number | string | object;

export type IsNumberFn = (value: ValueType) => boolean;
export type SuffixFn = (value: ValueType) => string;
export type CSSLength = number | string;

export function cssLengthToString(value: CSSLength): string {
  return typeof value === 'number' ? `${value}px` : value;
}

export const isNumber: IsNumberFn = value =>
  !Number.isNaN(parseInt(`${value}`, 10));
export const suffix: SuffixFn = value => (isNumber(value) ? `-${value}` : '');

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export const setBreakpoint = (
  breakpoint: keyof Breakpoint,
  value1: TS_FIXME,
  value2: TS_FIXME,
) => {
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

export const isWidthUp = (
  breakpoint: keyof Breakpoint,
  width: keyof Breakpoint,
  inclusive = true,
) => {
  if (inclusive) {
    return breakpoints.indexOf(breakpoint) <= breakpoints.indexOf(width);
  }
  return breakpoints.indexOf(breakpoint) < breakpoints.indexOf(width);
};
