export type ResponsiveProp<T> =
  | T
  | [T, T]
  | Partial<Record<BreakpointVariants, T>>;
export interface Breakpoint<T = string> {
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
}

export interface ResponsiveRangeProps {
  above?: Exclude<BreakpointVariants, "xl">;
  below?: Exclude<BreakpointVariants, "xs">;
}

export type Breakpoints = [string, string, string, string] &
  Partial<Breakpoint>;

export type BreakpointVariants = keyof Breakpoint;
