import * as React from "react";
import MuiFormHelperText, {
  FormHelperTextProps as IFormHelperText,
} from "@material-ui/core/FormHelperText";

export interface FormHelperTextProps extends IFormHelperText {
  "data-id"?: string;
}

export const FormHelperText = (props: FormHelperTextProps) => (
  <MuiFormHelperText {...props}>{props.children}</MuiFormHelperText>
);
