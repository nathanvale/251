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
  id,
  muiProps,
  name,
  ...others
}: RadioGroupBaseProps) => {
  return (
    <MuiRadioGroup {...muiProps} {...others} name={name} id={id ?? name}>
      {children}
    </MuiRadioGroup>
  );
};

RadioGroupBase.displayName = "RadioGroupBase";
RadioGroupBase.defaultProps = {
  "data-id": "radio-group-base",
};
