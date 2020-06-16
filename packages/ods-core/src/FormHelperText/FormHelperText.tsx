import * as React from "react";
import MuiFormHelperText, {
  FormHelperTextProps as MuiFormHelperTextProps,
} from "@material-ui/core/FormHelperText";
import clsx from "clsx";
import { BaseFormStateProps } from "@origin-digital/ods-types";
import { useGreyHelperText } from "@origin-digital/ods-typography";

export interface FormHelperTextProps extends BaseFormStateProps {
  id: string;
  muiProps?: MuiFormHelperTextProps;
}

export const FormHelperText = ({
  children,
  className,
  muiProps,
  ...others
}: FormHelperTextProps) => {
  const grey400ClassName = useGreyHelperText();
  return (
    <MuiFormHelperText
      {...muiProps}
      {...others}
      className={clsx(className, grey400ClassName)}
    >
      {children}
    </MuiFormHelperText>
  );
};

FormHelperText.displayName = "FormHelperText";
FormHelperText.defaultProps = {
  "data-id": "form-helper-text",
};
