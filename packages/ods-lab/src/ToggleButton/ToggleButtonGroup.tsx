import * as React from "react";
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as IToggleButtonGroup,
} from "@material-ui/lab/ToggleButtonGroup";

export interface ToggleButtonGroupProps extends IToggleButtonGroup {}

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => (
  <MuiToggleButtonGroup {...props}>{props.children}</MuiToggleButtonGroup>
);
