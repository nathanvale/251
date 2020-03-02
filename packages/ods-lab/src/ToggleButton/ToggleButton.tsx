import * as React from "react";
import MuiToggleButton, {
  ToggleButtonProps as IToggleButton,
} from "@material-ui/lab/ToggleButton";

export interface ToggleButtonProps extends IToggleButton {}

export const ToggleButton = (props: ToggleButtonProps) => (
  <MuiToggleButton {...props}>{props.children}</MuiToggleButton>
);
