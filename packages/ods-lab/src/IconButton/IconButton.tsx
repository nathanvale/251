import * as React from "react";
import MuiIconButton, {
  IconButtonProps as IIconButton,
} from "@material-ui/core/IconButton";

export interface IconButtonProps extends IIconButton {}

export const IconButton = (props: IconButtonProps) => (
  <MuiIconButton {...props}>{props.children}</MuiIconButton>
);
