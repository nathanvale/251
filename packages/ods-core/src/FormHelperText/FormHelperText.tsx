import * as React from "react";
import MuiFormHelperText, {
  FormHelperTextProps as MuiFormHelperTextProps,
} from "@material-ui/core/FormHelperText";
import { ComponentBaseProps } from "@origin-digital/ods-types";

export interface FormHelperTextProps extends ComponentBaseProps {
  id: string;
  muiProps?: MuiFormHelperTextProps;
}

export const FormHelperText = ({
  children,
  muiProps,
  ...others
}: FormHelperTextProps) => (
  <MuiFormHelperText {...muiProps} {...others}>
    {children}
  </MuiFormHelperText>
);

FormHelperText.displayName = "FormHelperText";
FormHelperText.defaultProps = {
  "data-id": "formHelperText",
};
