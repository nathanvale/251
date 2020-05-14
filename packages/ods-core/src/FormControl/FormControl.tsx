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
  muiProps?: MuiFormControlProps;
}

export const FormControl = ({
  muiProps = {} as any,
  ...others
}: FormControlProps) => <MuiFormControl {...muiProps} {...others} />;

FormControl.displayName = "FormControl";
FormControl.defaultProps = {
  component: "fieldset",
  "data-id": "form-control",
};
