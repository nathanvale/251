import * as React from "react";
import MuiInputLabel, {
  InputLabelProps as IInputLabel,
} from "@material-ui/core/InputLabel";

export interface InputLabelProps extends IInputLabel {
  "data-id"?: string;
}

export const InputLabel = (props: InputLabelProps) => (
  <MuiInputLabel {...props}>{props.children}</MuiInputLabel>
);
