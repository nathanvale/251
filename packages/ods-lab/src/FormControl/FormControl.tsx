import * as React from "react";
import MuiFormControl, {
  FormControlProps as IFormControl,
} from "@material-ui/core/FormControl";

export interface FormControlProps extends IFormControl {
  "data-id"?: string;
  component?: React.ElementType;
}

export const FormControl = (props: FormControlProps) => (
  <MuiFormControl {...props}>{props.children}</MuiFormControl>
);
