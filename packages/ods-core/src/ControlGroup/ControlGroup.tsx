import React from "react";
import {
  BaseFormStateProps,
  FormGroupElements,
  LabelElements,
} from "@origin-digital/ods-types";
import {
  FormControlProps as MuiFormControlProps,
  FormLabelProps as MuiFormLabelProps,
  FormHelperTextProps as MuiFormHelperTextProps,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "../FormControl/FormControl";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormHelperText } from "../FormHelperText/FormHelperText";

export type ControlGroupMuiProps = {
  formControlProps?: MuiFormControlProps;
  formLabelProps?: MuiFormLabelProps;
  formHelperTextProps?: MuiFormHelperTextProps;
};
export interface ControlGroupProps extends BaseFormStateProps {
  groupComponent?: FormGroupElements;
  labelComponent?: LabelElements;
  label?: string;
  helperText?: string;
  muiProps?: ControlGroupMuiProps;
}

const getHelperId = (id: string = "") => `${id}-helperText`;
const getLabelId = (id: string = "") => `${id}-label`;

const useFLClasses = makeStyles({
  root: {
    marginBottom: "14px",
    paddingTop: "6px",
  },
});

export const ControlGroup = ({
  children,
  disabled,
  error,
  groupComponent,
  helperText,
  id,
  label,
  labelComponent,
  muiProps,
}: ControlGroupProps) => {
  const flClasses = useFLClasses();
  return (
    <FormControl
      component={groupComponent}
      disabled={disabled}
      error={error}
      id={id}
      muiProps={muiProps?.formControlProps}
    >
      <FormLabel
        classes={flClasses}
        error={false}
        id={getLabelId(id)}
        component={labelComponent}
        muiProps={muiProps?.formLabelProps}
      >
        {label}
      </FormLabel>
      {children}
      <FormHelperText
        error={error}
        id={getHelperId(id)}
        muiProps={muiProps?.formHelperTextProps}
      >
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};

ControlGroup.displayName = "ControlGroup";
ControlGroup.defaultProps = {
  groupComponent: "fieldset",
  labelComponent: "legend",
  "data-id": "controlGroup",
};
