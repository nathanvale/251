import React from "react";

export * from "./docs";

export type AlignXType = "left" | "center" | "right" | "stretch";

export type TLength = string | 0 | number;

export type FluidityVariant = "off" | "max-width-at-xl" | "full-width";
export type BackgroundVariant = "transparent" | "grey4" | "white";

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
  number,
] &
  SpaceTShirts;

export interface Color {
  redPink: string;
  red: string;
  orange: string;
  darkOrange: string;
  lightOrange: string;
  lighterOrange: string;
  lightBlue: string;
  grey: string;
  lightGrey: string;
  blue: string;
  green: string;
  lightGreen: string;
  purple: string;
  grey4: string;
  grey8: string;
  grey16: string;
  grey24: string;
  grey48: string;
  grey80: string;
  grey56: string;
  white: string;
  transparent: string;
}

export type ColorVariants = keyof Color;

export interface Shadow {
  small: string;
  medium: string;
  large: string;
}

export type ShadowVariants = keyof Shadow;

export interface Border {
  width: {
    standard: number;
    large: number;
  };
  color: {
    standard: string;
    standardInverted: string;
    formHover: string;
    focus: string;
    critical: string;
    formAccent: string;
    primary: string;
    secondary: string;
  };
}

export interface Transform {
  touchable: string;
}

export type TransformVariants = keyof Transform;

export interface Transition {
  fast: string;
  touchable: string;
}

export type TransitionVariants = keyof Transition;

export interface Typography {
  fontFamily: string;
  descenderHeightScale: number;
  capHeightScale: number;
  gridRow: number;
  weight: {
    regular: number;
    medium: number;
  };
  text: {
    xxxsmall: {
      size: number;
      rows: number;
    };
    xxsmall: {
      size: number;
      rows: number;
    };
    xsmall: {
      size: number;
      rows: number;
    };
    small: {
      size: number;
      rows: number;
    };
    medium: {
      size: number;
      rows: number;
    };
    large: {
      size: number;
      rows: number;
    };
    xlarge: {
      size: number;
      rows: number;
    };
    xxlarge: {
      size: number;
      rows: number;
    };
    xxxlarge: {
      size: number;
      rows: number;
    };
  };
}

export interface Theme {
  typography: Typography;
  colors: Color;
  space: Space;
  shadows: Shadow;
  breakpoints: Breakpoints;
  transforms: Transform;
  transitions: Transition;
  gridGutterWidth: 16 | 32;
  section: { maxWidth: Breakpoint<number> };
  border: Border;
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

export type InputValueType = string | number | string[];

export interface BaseFormStateProps extends ComponentBaseProps {
  error?: boolean;
  required?: boolean;
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
    value: string,
  ) => void;
  value?: InputValueType;
}

export interface BaseSwitchBaseProps extends Omit<BaseInputProps, "onChange"> {
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
}

export interface BaseSwitchProps
  extends Omit<BaseSwitchBaseProps, "aria-describedby"> {
  label: React.ReactNode;
  helperText?: React.ReactNode;
}

export type LabelElements =
  | "cite"
  | "form"
  | "label"
  | "span"
  | "a"
  | "abbr"
  | "div"
  | "fieldset"
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
