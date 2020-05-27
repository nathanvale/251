import React, { AnchorHTMLAttributes, ComponentType } from "react";
import { FontSizeVariants } from "@material-ui/core/styles/createTypography";

export * from "./docs";
export * from "./palette";
export * from "./tracking";

export type ChevronVaraints = keyof Pick<Colors, "primary" | "secondary">;
export interface ChevronContainerProps {
  children: React.ReactNode;
}
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: ColorVariants;
  width?: number | string;
  height?: number | string;
}

export type BackgroundColorVariants = ColorVariants;

export type HeadingComponentVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextLinkRenderProps {
  textLinkStyles: string;
}

export interface ChevronLinkRenderProps {
  chevronLinkStyles: string;
  IconChevron: () => JSX.Element;
}

export type TextToneVariants =
  | keyof Pick<Colors, "critical" | "positive">
  | "neutral"
  | "neutral.light"
  | "neutral.dark";
export type TypographyWeightVariants = "regular" | "medium" | "bold";
export type TextVariants =
  | "subtitle"
  | "subtitle-small"
  | "body"
  | "body-small"
  | "caption"
  | "overline-text";

export type Heading12Variants = "h1" | "h2";
export type Heading34Variants = "h3" | "h4";
export type HeadingVariants = Heading12Variants | Heading34Variants;

export type TypographyVariants =
  | TextVariants
  | Heading12Variants
  | Heading34Variants;

export type TextAlignVariants = "left" | "right" | "center";

export type AlignXType = "left" | "center" | "right";

export type TLength = string | 0 | number;

export type FluidityVariant = "off" | "max-width-at-xl" | "full-width";
export type BackgroundVariant = "transparent" | "grey50" | "white";

export type CardStackSectionVariant = "widget" | "default" | "card-centered";
export type CardStackSize = "small" | "medium" | "large";
export type PaddingYVariants = "none" | "small" | "medium";
export type CardPaddingVariants = "small" | "medium" | "large";

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
  | "inline-flex";

export type FlexDirectionVariants =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type JustifyContentVariants =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between";

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

export type SpaceVariants = keyof SpaceTShirts;

export type ResponsiveSpace = ResponsiveProp<SpaceVariants>;

export type Breakpoints = [string, string, string, string] &
  Partial<Breakpoint>;

export type BreakpointVariants = keyof Breakpoint;

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

export interface Colors {
  backgroundDefault: string;
  backgroundPaper: string;
  caution: string;
  cautionDark: string;
  cautionLight: string;
  critical: string;
  criticalDark: string;
  criticalLight: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey50: string;
  grey500: string;
  grey600: string;
  info: string;
  infoDark: string;
  infoLight: string;
  positive: string;
  positiveDark: string;
  positiveLight: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primaryB: string;
  primaryBDark: string;
  primaryBLight: string;
  promote: string;
  promoteDark: string;
  promoteLight: string;
  promoteB: string;
  promoteBDark: string;
  promoteBLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  secondaryB: string;
  secondaryBDark: string;
  secondaryBLight: string;
  white: string;
  transparent: string;
}

export type ColorVariants = keyof Colors;

export interface Shadow {
  small: string;
  medium: string;
  large: string;
}

export type ShadowVariants = keyof Shadow;

export interface Transform {
  touchable: string;
}

export type TransformVariants = keyof Transform;

export interface Transition {
  fast: string;
  touchable: string;
}

export type TransitionVariants = keyof Transition;

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

export interface Theme {
  typography: Typography;
  colors?: Colors;
  space: Space;
  shadows: Shadow;
  breakpoints: Breakpoints;
  transforms: Transform;
  transitions: Transition;
  gridGutterWidth: 16 | 32;
  section: { maxWidth: Breakpoint<number> };
}

// Section for Mui components

export interface OptionalTrackableProps {
  "data-id"?: string;
}

export type LinkComponentType = ComponentType<LinkComponentProps>;
export interface LinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    OptionalTrackableProps {
  href: string;
  ref?: React.RefObject<any>;
}

export interface ComponentBaseProps extends OptionalTrackableProps {
  children?: React.ReactNode;
  className?: string;
  classes?: Record<string, string>;
  disabled?: boolean;
  id?: string;
}

export type InputValueType = string | number | string[];

export interface BaseFormStateProps extends ComponentBaseProps {
  error?: boolean;
  required?: boolean;
  focused?: boolean;
}

export interface BaseInputProps extends BaseFormStateProps {
  id: string;
  "aria-describedby"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  inputRef?: React.Ref<any>;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  value?: InputValueType;
}

export interface BaseSwitchBaseProps extends Omit<BaseInputProps, "onChange"> {
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

export interface BaseSwitchProps
  extends Omit<BaseSwitchBaseProps, "aria-describedby"> {
  label: React.ReactNode;
  helperText?: React.ReactNode;
}

export type LabelElements =
  | "cite"
  | "label"
  | "span"
  | "abbr"
  | "div"
  | "legend"
  | "p"
  | "pre"
  | "q"
  | "section";

export type FormGroupElements =
  | "form"
  | "span"
  | "div"
  | "fieldset"
  | "section";

export type ButtonVariant = "contained" | "outlined" | "text";
export type ButtonSize = "small" | "medium";
export type ButtonColor = "primary" | "secondary";
export type ButtonElements = "button" | "a" | "input";
export type InputType = "button" | "submit" | "reset";
