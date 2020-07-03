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
  "data-id": dataId,
  id,
  muiProps,
  ...others
}: FormHelperTextProps) => {
  const grey400ClassName = useGreyHelperText();
  return (
    <MuiFormHelperText
      className={clsx(className, grey400ClassName)}
      data-id={dataId || id}
      id={id}
      {...others}
      {...muiProps}
    >
      {children}
    </MuiFormHelperText>
  );
};

FormHelperText.displayName = "FormHelperText";
FormHelperText.defaultProps = {};
