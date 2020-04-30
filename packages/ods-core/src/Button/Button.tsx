import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@material-ui/core";
import {
  ButtonColor,
  ButtonElements,
  ButtonSize,
  ButtonVariant,
  ComponentBaseProps,
  InputType,
  ResponsiveProp,
} from "@origin-digital/ods-types";
import { useButtonStyles, useInverseStyles } from "./button-styles";

interface ButtonActionProps {
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onClickCapture?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  onKeyPress?: KeyboardEventHandler<HTMLButtonElement>;
  onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
}

export interface ButtonProps
  extends Omit<ComponentBaseProps, "classes">,
    ButtonActionProps {
  variant?: ButtonVariant;
  noTextPadding?: boolean;
  color?: ButtonColor; // secondary here is a grey colour.
  classes?: MuiButtonProps["classes"];
  size?: ButtonSize;
  fullWidth?: ResponsiveProp<boolean>;
  icon?: React.ReactNode; // it is always on the left.
  component?: ButtonElements;
  href?: string;
  target?: "_self" | "_blank" | string;
  inverse?: boolean;
  type?: InputType;
  buttonRef?: React.Ref<unknown>;
  muiProps?: MuiButtonProps;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    color = "primary",
    component = "button",
    fullWidth,
    href,
    icon,
    inverse,
    noTextPadding,
    muiProps,
    type,
    size = "medium",
    variant = "contained",
    ...others
  } = props;

  const btnClasses = useButtonStyles({
    size,
    variant,
    hasIcon: !!icon,
    noTextPadding,
    fullWidth,
  });
  const inverseClasses = useInverseStyles({
    size,
    variant,
    hasIcon: !!icon,
    noTextPadding,
    fullWidth,
  });

  const newComp = href ? "a" : component;

  return (
    <MuiButton
      {...muiProps}
      {...others}
      classes={inverse ? inverseClasses : btnClasses}
      color={color}
      component={newComp}
      href={href}
      type={type}
      size={size}
      startIcon={icon}
      variant={variant}
    >
      {children}
    </MuiButton>
  );
};

Button.displayName = "Button";
Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
  component: "button",
};
