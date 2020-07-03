import React from "react";
import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from "@material-ui/core";
import { BaseInputProps, InputValueType } from "@origin-digital/ods-types";

export interface RadioGroupBaseProps
  extends Omit<BaseInputProps, "inputRef" | "id"> {
  id?: string;
  name: string;
  defaultValue?: InputValueType;
  muiProps?: MuiRadioGroupProps;
}

export const RadioGroupBase = ({
  children,
  "data-id": dataId,
  id,
  muiProps,
  name,
  ...others
}: RadioGroupBaseProps) => {
  const calcId = id ?? name;
  return (
    <MuiRadioGroup
      data-id={dataId || calcId}
      id={calcId}
      name={name}
      {...others}
      {...muiProps}
    >
      {children}
    </MuiRadioGroup>
  );
};

RadioGroupBase.displayName = "RadioGroupBase";
RadioGroupBase.defaultProps = {};
