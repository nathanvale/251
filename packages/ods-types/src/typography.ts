import { FontSizeVariants } from "@material-ui/core/styles/createTypography";

export type HeadingComponentVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextLinkRenderProps {
  textLinkStyles: string;
}

export interface ChevronLinkRenderProps {
  chevronLinkStyles: string;
  IconChevron: () => JSX.Element;
}

export type GraphicColorVariants = "secondary" | "white";
export type TypographyWeightVariants = "regular" | "medium" | "bold";
export type BaseTextVariants = "body" | "body-small";
export type TextVariants =
  | BaseTextVariants
  | "subtitle"
  | "subtitle-small"
  | "caption"
  | "overline-text";

export type Heading12Variants = "h1" | "h2";
export type Heading34Variants = "h3" | "h4";
export type HeadingVariants = Heading12Variants | Heading34Variants;

export type TypographyVariants =
  | TextVariants
  | Heading12Variants
  | Heading34Variants;

export type FontSizeMetrics = {
  size: number;
  rows: number;
};

export type FontWeightValue = {
  regular: number;
  medium: number;
};

export interface Typography {
  fontFamily: string;
  descenderHeightScale: number;
  capHeightScale: number;
  gridRow: number;
  weight: FontWeightValue;
  text: Record<FontSizeVariants, FontSizeMetrics>;
}
