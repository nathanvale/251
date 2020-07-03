import * as React from "react";
import MuiFormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from "@material-ui/core/FormControlLabel";
import { BaseFormStateProps } from "@origin-digital/ods-types";

export interface FormControlLabelProps extends BaseFormStateProps {
  control: React.ReactElement;
  label: React.ReactNode;
  muiProps?: MuiFormControlLabelProps;
}

export const FormControlLabel = ({
  muiProps = {} as MuiFormControlLabelProps,
  ...others
}: FormControlLabelProps) => <MuiFormControlLabel {...others} {...muiProps} />;

FormControlLabel.displayName = "FormControlLabel";
FormControlLabel.defaultProps = {
  "data-id": "form-control-label",
};
