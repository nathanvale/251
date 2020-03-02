import * as React from "react";
import MuiFormControlLabel, {
  FormControlLabelProps as IFormControlLabel,
} from "@material-ui/core/FormControlLabel";

export interface FormControlLabelProps extends IFormControlLabel {
  "data-id"?: string;
}

export const FormControlLabel = (props: FormControlLabelProps) => (
  <MuiFormControlLabel {...props}>{props.children}</MuiFormControlLabel>
);
