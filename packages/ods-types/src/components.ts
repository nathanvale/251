import React, {
  AnchorHTMLAttributes,
  ChangeEvent,
  ComponentType,
  ReactNode,
  Ref,
  RefObject,
} from "react";
import { FormControlLabelProps as MuiFormControlLabelProps } from "@material-ui/core/FormControlLabel/FormControlLabel";
import { FormHelperTextProps as MuiFormHelperTextProps } from "@material-ui/core/FormHelperText/FormHelperText";
import { ResponsiveProp } from "./responsive";
import { ColorPalette } from "./palette";

/************************* generic types ********************************/
export interface OptionalTrackableProps {
  "data-id"?: string;
}

export interface ComponentBaseProps extends OptionalTrackableProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

export interface MuiBasedComponentBaseProps extends ComponentBaseProps {
  classes?: Record<string, string>;
  disabled?: boolean;
}

export interface MuiProps<T> {
  muiProps?: T;
}

export type RequiredNoBaseProps<
  T extends { children?: ReactNode; className?: string; id?: string }
> = Required<Omit<T, "children" | "className" | "id">>;

export interface AnimationHookProps {
  duration?: number;
  easing?: string;
}

/************************* Input components ********************************/
export type InputValueType = string | number;

export interface BaseFormStateProps extends MuiBasedComponentBaseProps {
  error?: boolean;
  focused?: boolean;
}

export interface BaseInputProps extends BaseFormStateProps {
  id: string;
  "aria-describedby"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  inputRef?: Ref<any>;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
  value?: InputValueType;
}

export interface BaseSwitchBaseProps extends Omit<BaseInputProps, "onChange"> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export interface BaseSwitchProps
  extends Omit<BaseSwitchBaseProps, "aria-describedby"> {
  label: ReactNode;
  helperText?: ReactNode;
}

export interface SwitchBaseMuiProps {
  "aria-describedby"?: string;
  classes?: {};
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface SwitchMuiProps<CompMuiProps extends SwitchBaseMuiProps> {
  formControlLabelProps?: MuiFormControlLabelProps;
  componentProps?: CompMuiProps;
  formHelperTextProps?: MuiFormHelperTextProps;
}

export interface AbstractSwitchBaseProps<MuiProps extends SwitchBaseMuiProps>
  extends BaseSwitchBaseProps {
  Component: React.ComponentType<any>;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  muiProps?: MuiProps;
}

export interface AbstractSwitchProps<
  CompMuiProps,
  MuiProps extends SwitchMuiProps<CompMuiProps>
> extends BaseSwitchProps {
  Component: React.ComponentType<any>;
  muiProps?: MuiProps;
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

export type TextFieldVariant = "filled" | "outlined";
export type TextFieldSize = "small" | "medium";

/************************* Links and Buttons ********************************/
export type LinkComponentType = ComponentType<LinkComponentProps>;
export interface LinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    OptionalTrackableProps {
  href: string;
  ref?: RefObject<any>;
}

export interface LinkBaseProps extends ComponentBaseProps {
  href: LinkComponentProps["href"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  domProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

export type ButtonColor = "primary" | "secondaryB";
export type ButtonElements = "button" | "a" | "input";
export type ButtonVariant = "contained" | "outlined" | "text";
export type ButtonSize = "small" | "medium";
export type IconButtonColor = ButtonColor | "inherit";
export type InputType = "button" | "submit" | "reset";
export type TabSize = "small" | "medium";

/************************* Card, CardStackSection ********************************/
export type CardBackgroundVariant = keyof Pick<
  ColorPalette,
  "grey50" | "white" | "transparent"
>;
export type CardPaddingVariants = "small" | "medium" | "large";
export type CardStackSectionVariant = "widget" | "default" | "card-centered";
export type CardStackSize = "small" | "medium" | "large";
export type FluidityVariant = ResponsiveProp<boolean>;
export type PaddingYVariants = "none" | "small" | "medium";

/************************* Dialog component ********************************/
export type DialogMaxWidthVariants = "sm" | "md" | "lg" | false;
