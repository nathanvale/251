import React from "react";
import { CheckboxProps as MuiCheckboxProps } from "@material-ui/core";
import { BaseSwitchProps } from "@origin-digital/ods-types";
import { CheckboxBase } from "../CheckboxBase/CheckboxBase";
import { AbstractSwitch } from "../_private/components/AbstractSwitch/AbstractSwitch";
import { SwitchMuiProps } from "../_private/components/AbstractSwitch/abstract-types";

export type CheckboxMuiPropsType = SwitchMuiProps<MuiCheckboxProps>;

export interface CheckboxProps extends BaseSwitchProps {
  muiProps?: CheckboxMuiPropsType;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <AbstractSwitch<MuiCheckboxProps, CheckboxMuiPropsType>
      Component={CheckboxBase}
      {...props}
    />
  );
};

Checkbox.displayName = "Checkbox";
Checkbox.defaultProps = {};
