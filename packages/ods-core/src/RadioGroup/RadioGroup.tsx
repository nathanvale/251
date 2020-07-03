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
  extends Omit<
    BaseInputProps,
    "inputRef" | "id" | "aria-describedby" | "aria-labelledby" | "aria-label"
  > {
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
  id ?? `${name}-control-group`;

const getControlGroupDataId = (name: string, id?: string, dataId?: string) =>
  dataId ?? id ?? `${name}-control-group`;

export const RadioGroup = ({
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
  name,
  ...others
}: RadioGroupProps) => {
  const cgDataId = getControlGroupDataId(name, id, dataId);
  return (
    <ControlGroup
      disabled={disabled}
      error={error}
      groupComponent={groupComponent}
      id={getControlGroupId(name, id)}
      data-id={cgDataId}
      label={label}
      labelComponent={labelComponent}
      helperText={helperText}
      muiProps={muiProps?.controlGroupMuiProps}
    >
      <RadioGroupBase
        data-id={dataId}
        id={id}
        name={name}
        aria-describedby={`${getControlGroupId(name, id)}-helperText`}
        aria-labelledby={`${getControlGroupId(name, id)}-label`}
        {...others}
        muiProps={muiProps?.radioGroupProps}
      >
        {children}
      </RadioGroupBase>
    </ControlGroup>
  );
};

RadioGroup.displayName = "RadioGroup";
RadioGroup.defaultProps = {
  groupComponent: "fieldset",
  labelComponent: "legend",
};
