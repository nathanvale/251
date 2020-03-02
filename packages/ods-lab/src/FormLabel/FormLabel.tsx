import * as React from "react";
import MuiFormLabel, {
  FormLabelProps as IFormLabel,
} from "@material-ui/core/FormLabel";

export interface FormLabelProps extends IFormLabel {
  "data-id"?: string;
  component?: React.ElementType;
}

export const FormLabel = (props: FormLabelProps) => (
  <MuiFormLabel {...props}>{props.children}</MuiFormLabel>
);
