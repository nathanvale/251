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
import { FormControl } from "../FormControl";
import { FormLabel } from "../FormLabel";
import { FormHelperText } from "../FormHelperText";

export type ControlGroupMuiProps = {
  formControlProps?: MuiFormControlProps;
  formLabelProps?: MuiFormLabelProps;
  formHelperTextProps?: MuiFormHelperTextProps;
};
export interface ControlGroupProps extends BaseFormStateProps {
  groupComponent?: FormGroupElements;
  id: string;
  labelComponent?: LabelElements;
  label?: string;
  helperText?: string;
  muiProps?: ControlGroupMuiProps;
}

const getHelperId = (id: string = "") => `${id}-helper-text`;
const getLabelId = (id: string = "") => `${id}-label`;

const useFLClasses = makeStyles({
  root: {
    marginBottom: "14px",
    paddingTop: "6px",
  },
});

export const ControlGroup: React.FunctionComponent<ControlGroupProps> = ({
  children,
  "data-id": dataId,
  disabled,
  error,
  groupComponent,
  helperText,
  id,
  label,
  labelComponent,
  muiProps,
  ...others
}: ControlGroupProps) => {
  const flClasses = useFLClasses();
  const baseDataId = dataId || id;
  return (
    <FormControl
      component={groupComponent}
      disabled={disabled}
      error={error}
      id={id}
      data-id={baseDataId}
      {...others}
      muiProps={muiProps?.formControlProps}
    >
      {label ? (
        <FormLabel
          classes={flClasses}
          data-id={`${baseDataId}-label`}
          error={false}
          id={getLabelId(id)}
          component={labelComponent}
          muiProps={muiProps?.formLabelProps}
        >
          {label}
        </FormLabel>
      ) : null}
      {children}
      {helperText ? (
        <FormHelperText
          data-id={`${baseDataId}-helper-text`}
          error={error}
          id={getHelperId(id)}
          muiProps={muiProps?.formHelperTextProps}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

ControlGroup.displayName = "ControlGroup";
ControlGroup.defaultProps = {
  groupComponent: "fieldset",
  labelComponent: "legend",
};
