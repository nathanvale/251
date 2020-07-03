import React from "react";
import clsx from "clsx";
import {
  FormLabel as MuiFormLabel,
  FormLabelProps as MuiFormLabelProps,
  makeStyles,
} from "@material-ui/core";
import { BaseFormStateProps, LabelElements } from "@origin-digital/ods-types";

export interface FormLabelProps extends BaseFormStateProps {
  component?: LabelElements;
  muiProps?: MuiFormLabelProps;
}

/**
 * In MUI FormLabel gets the palette.primary.main colour when it is focused on, however we do not want our
 * labels to change colour when they are focused.
 */
const useLabelStyles = makeStyles(
  (theme) => ({
    root: {
      "&.Mui-error": {
        color: theme.palette.text.primary,
      },
      "&.Mui-focused": {
        color: theme.palette.text.primary,
      },
      // In Material-UI error has priority over disabled. However, for us disabled should override others as the highest priority.
      "&.Mui-disabled": {
        color: theme.palette.text.disabled,
      },
    },
  }),
  { classNamePrefix: "FormLabel" }
);

export const FormLabel = ({
  disabled,
  focused,
  muiProps = {} as any,
  classes,
  className,
  ...others
}: FormLabelProps) => {
  const lblClasses = useLabelStyles();
  return (
    <MuiFormLabel
      className={clsx(lblClasses.root, className)}
      classes={classes}
      disabled={disabled}
      focused={focused}
      {...others}
      {...muiProps}
    />
  );
};

FormLabel.displayName = "FormLabel";
FormLabel.defaultProps = {
  component: "label",
};
