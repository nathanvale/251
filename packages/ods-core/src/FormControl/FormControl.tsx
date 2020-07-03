import * as React from "react";
import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from "@material-ui/core";
import {
  BaseFormStateProps,
  FormGroupElements,
} from "@origin-digital/ods-types";

export interface FormControlProps extends BaseFormStateProps {
  component?: FormGroupElements;
  fullWidth?: boolean;
  muiProps?: MuiFormControlProps;
}

export const FormControl = ({
  muiProps = {} as MuiFormControlProps,
  ...others
}: FormControlProps) => <MuiFormControl {...others} {...muiProps} />;

FormControl.displayName = "FormControl";
FormControl.defaultProps = {
  component: "fieldset",
  "data-id": "form-control",
};
