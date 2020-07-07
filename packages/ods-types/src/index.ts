import React, { AnchorHTMLAttributes, ComponentType } from "react";
import { FontSizeVariants } from "@material-ui/core/styles/createTypography";

export * from "./docs";
export * from "./palette";
export * from "./tracking";

export type SvgIconSizeVariants = "small" | "medium" | "large" | "inherit";
export type SvgIconToneVariants =
  | keyof Pick<
      ColorPalette,
      | "caution"
      | "critical"
      | "disabled"
      | "info"
      | "neutral"
      | "neutralDark"
      | "neutralLight"
      | "positive"
      | "positiveLight"
      | "primary"
      | "primaryB"
      | "promote"
      | "promoteB"
      | "secondary"
      | "secondaryB"
      | "white"
    >
  | "inherit";

export type ChevronVaraints = keyof Pick<Colors, "primary" | "secondary">;
export interface ChevronContainerProps {
  children: React.ReactNode;
}
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; //ColorVariants;
  width?: number | string;
  height?: number | string;
}

export type BackgroundColorVariants = ColorPaletteVariants;

export type HeadingComponentVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextLinkRenderProps {
  textLinkStyles: string;
}

export interface ChevronLinkRenderProps {
  chevronLinkStyles: string;
  IconChevron: () => JSX.Element;
}

export type TextToneVariants =
  | keyof Pick<Tones, "critical" | "positive">
  | "neutral"
  | "neutralLight"
  | "neutralDark";
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
export type AlignYType = "top" | "center" | "bottom";

export type TLength = string | 0 | number;

export type FluidityVariant = ResponsiveProp<boolean>;
export type CardBackgroundVariant = keyof Pick<
  ColorPalette,
  "grey50" | "white" | "transparent"
>;

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

export type FlexWrapVariants = "nowrap" | "wrap" | "wrap-reverse";

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

export interface ResponsiveRangeProps {
  above?: Exclude<BreakpointVariants, "xl">;
  below?: Exclude<BreakpointVariants, "xs">;
}

export type SpaceVariants = keyof SpaceTShirts;

export type ResponsiveSpace = ResponsiveProp<SpaceVariants>;

export type AlignX = "left" | "center" | "right";
export type AlignY = "top" | "center" | "bottom";

export interface CollapsibleAlignmentProps {
  collapseBelow?: ResponsiveRangeProps["below"];
  alignX?: ResponsiveProp<AlignX>;
  alignY?: ResponsiveProp<AlignY>;
}

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

export interface ColorPalette {
  //Mui Colors
  disabled: string;
  error: string;
  errorDark: string;
  errorLight: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey50: string;
  grey500: string;
  grey600: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primaryB: string;
  primaryBDark: string;
  primaryBLight: string;
  secondaryB: string;
  secondaryBDark: string;
  secondaryBLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  success: string;
  successDark: string;
  successLight: string;
  transparent: string;
  warning: string;
  warningDark: string;
  warningLight: string;
  white: string;
  // tones
  critical: string;
  criticalLight: string;
  criticalDark: string;
  caution: string;
  cautionLight: string;
  cautionDark: string;
  positive: string;
  positiveLight: string;
  positiveDark: string;
  info: string;
  infoLight: string;
  infoDark: string;
  neutral: string;
  neutralLight: string;
  neutralDark: string;
  promote: string;
  promoteLight: string;
  promoteDark: string;
  promoteB: string;
  promoteBLight: string;
  promoteBDark: string;
}

export type Tones = Pick<
  ColorPalette,
  | "critical"
  | "criticalLight"
  | "criticalDark"
  | "caution"
  | "cautionLight"
  | "cautionDark"
  | "positive"
  | "positiveLight"
  | "positiveDark"
  | "info"
  | "infoLight"
  | "infoDark"
  | "neutral"
  | "neutralLight"
  | "neutralDark"
  | "promote"
  | "promoteLight"
  | "promoteDark"
  | "promoteB"
  | "promoteBLight"
  | "promoteBDark"
>;

export type ToneVariants = keyof Tones;

export type ColorPaletteVariants = keyof ColorPalette;

export type ColorVariants = keyof Colors;

export interface Transform {
  touchable: string;
}

export type TransformVariants = keyof Transform;

export interface Transition {
  fast: string;
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
  space: Space;
  gridGutterWidth: 16 | 32;
  section: { maxWidth: Breakpoint<number> };
  breakpoints?: Breakpoints;
  transitions: Transition;
  colors?: Record<ColorPaletteVariants, string>;
}

// Section for Mui components

export interface OptionalTrackableProps {
  "data-id"?: string;
}

export interface ComponentBaseProps extends OptionalTrackableProps {
  children?: React.ReactNode;
  className?: string;
  classes?: Record<string, string>;
  disabled?: boolean;
  id?: string;
}

export interface MuiProps<T> {
  muiProps?: T;
}

export type LinkComponentType = ComponentType<LinkComponentProps>;
export interface LinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    OptionalTrackableProps {
  href: string;
  ref?: React.RefObject<any>;
}

export interface LinkBaseProps extends OptionalTrackableProps {
  href: LinkComponentProps["href"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
  domProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

export type InputValueType = string | number;

export interface BaseFormStateProps extends ComponentBaseProps {
  error?: boolean;
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
    value?: string
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

export type TextFieldVariant = "filled" | "outlined";

export type TextFieldSize = "small" | "medium";

export interface AnimationHookProps {
  duration?: number;
  easing?: string;
}

export type DialogMaxWidthVariants = "sm" | "md" | "lg" | false;

export type RequiredWithoutChildren<
  T extends { children?: React.ReactNode }
> = Required<Omit<T, "children">>;
