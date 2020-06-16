import React from "react";
import { ComponentBaseProps } from "@origin-digital/ods-types";
import {
  IconButtonProps as MuiIconButtonProps,
  IconButton as MuiIconButton,
} from "@material-ui/core";

export interface IconButtonProps extends ComponentBaseProps {
  "aria-label"?: string;
  onClick?: () => void;
  muiProps?: MuiIconButtonProps;
}

export const IconButton = (props: IconButtonProps) => (
  <MuiIconButton {...props} {...props.muiProps}>
    {props.children}
  </MuiIconButton>
);
