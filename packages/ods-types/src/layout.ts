import type { ResponsiveProp, ResponsiveRangeProps } from "./responsive";

export type TLength = string | 0 | number;

export type AlignItemsVariants =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch";

export type DisplayVariants =
  | "none"
  | "block"
  | "inline"
  | "flex"
  | "inline-block"
  | "inline-flex"
  | "list-item";

export type FlexDirectionVariants =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type FlexWrapVariants = "nowrap" | "wrap" | "wrap-reverse";

export type JustifyContentVariants =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between";

interface SpaceTShirts {
  none?: number;
  xxsmall?: number;
  xsmall?: number;
  small?: number;
  medium?: number;
  large?: number;
  xlarge?: number;
  xxlarge?: number;
  xxxlarge?: number;
}

export type Space = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
] &
  SpaceTShirts;

export type SpaceVariants = keyof SpaceTShirts;

export type ResponsiveSpace = ResponsiveProp<SpaceVariants>;

export type AlignXType = "left" | "center" | "right";
export type AlignYType = "top" | "center" | "bottom";
export type TextAlignVariants = "left" | "right" | "center";

export interface CollapsibleAlignmentProps {
  collapseBelow?: ResponsiveRangeProps["below"];
  alignX?: ResponsiveProp<AlignXType>;
  alignY?: ResponsiveProp<AlignYType>;
}
