import React from "react";
import { RadioGroupProps as MuiRadioGroupProps } from "@material-ui/core";
import {
  BaseInputProps,
  FormGroupElements,
  InputValueType,
  LabelElements,
} from "@origin-digital/ods-types";
import { RadioGroupBase } from "../RadioGroupBase/RadioGroupBase";
import {
  ControlGroup,
  ControlGroupMuiProps,
} from "../ControlGroup/ControlGroup";

export interface RadioGroupMuiProps {
  controlGroupMuiProps?: ControlGroupMuiProps;
  radioGroupProps?: MuiRadioGroupProps;
}

export interface RadioGroupProps
  extends Omit<BaseInputProps, "inputRef" | "id"> {
  name: string;
  defaultValue?: InputValueType;
  groupComponent?: FormGroupElements;
  helperText?: string;
  id?: string;
  label?: string;
  labelComponent?: LabelElements;
  muiProps?: RadioGroupMuiProps;
}

const getControlGroupId = (name: string, id?: string) =>
  id ?? `${name}-controlGroup`;

export const RadioGroup = ({
  children,
  disabled,
  error,
  groupComponent,
  helperText,
  id,
  label,
  labelComponent,
  muiProps,
  name,
  ...others
}: RadioGroupProps) => {
  return (
    <ControlGroup
      disabled={disabled}
      error={error}
      groupComponent={groupComponent}
      id={getControlGroupId(name, id)}
      label={label}
      labelComponent={labelComponent}
      helperText={helperText}
      muiProps={muiProps?.controlGroupMuiProps}
    >
      <RadioGroupBase
        muiProps={muiProps?.radioGroupProps}
        {...others}
        name={name}
        aria-describedby={`${getControlGroupId(name, id)}-helperText`}
        aria-labelledby={`${getControlGroupId(name, id)}-label`}
      >
        {children}
      </RadioGroupBase>
    </ControlGroup>
  );
};

RadioGroup.displayName = "RadioGroup";
RadioGroup.defaultProps = {
  "data-id": "RadioGroup",
};
