import createBreakpoints, {
  BreakpointValues,
} from "@material-ui/core/styles/createBreakpoints";

export const breakpointValues: BreakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const breakpoints = createBreakpoints({
  values: breakpointValues,
});
