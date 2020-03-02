import * as React from "react";
import MuiInput, {InputProps as IInput} from "@material-ui/core/Input";

export interface InputProps extends IInput {
  "data-id"?: string;
}

export const Input = (props: IInput) => (
  <MuiInput {...props}>{props.children}</MuiInput>
);
