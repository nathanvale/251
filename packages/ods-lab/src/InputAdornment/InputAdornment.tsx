import * as React from "react";
import MuiInputAdornment, {
  InputAdornmentProps as IInputAdornment,
} from "@material-ui/core/InputAdornment";

export interface InputAdornmentProps extends IInputAdornment {
  "data-id"?: string;
}

export const InputAdornment = (props: InputAdornmentProps) => (
  <MuiInputAdornment {...props}>{props.children}</MuiInputAdornment>
);
