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
const useLabelClasses = makeStyles((theme) => ({
  root: {
    "&$focused": {
      color: theme.palette.text.primary,
    },
  },
  focused: {},
}));
export const FormLabel = ({
  muiProps = {} as any,
  classes,
  className,
  ...others
}: FormLabelProps) => {
  const lblClasses = useLabelClasses();
  return (
    <MuiFormLabel
      {...muiProps}
      {...others}
      className={clsx(lblClasses.root, lblClasses.focused, className)}
      classes={classes}
    />
  );
};

FormLabel.displayName = "FormLabel";
FormLabel.defaultProps = {
  component: "label",
  "data-id": "formLabel",
};
