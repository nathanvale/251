import * as React from "react";
import MuiFormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from "@material-ui/core/FormControlLabel";
import { ComponentBaseProps } from "@origin-digital/ods-types";

export interface FormControlLabelProps extends ComponentBaseProps {
  control: React.ReactElement;
  label: React.ReactNode;
  error?: boolean;
  muiProps?: MuiFormControlLabelProps;
}

export const FormControlLabel = ({
  muiProps = {} as any,
  ...others
}: FormControlLabelProps) => <MuiFormControlLabel {...muiProps} {...others} />;

FormControlLabel.displayName = "FormControlLabel";
FormControlLabel.defaultProps = {
  "data-id": "formControlLabel",
};
