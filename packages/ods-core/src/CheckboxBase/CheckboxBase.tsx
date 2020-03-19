import React from "react";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@material-ui/icons/CheckBoxSharp";
import {
  CheckboxProps as MuiCheckboxProps,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import { BaseSwitchBaseProps } from "@origin-digital/ods-types";
import { AbstractSwitchBase } from "../_private/components/AbstractSwitch/AbstractSwitchBase";

export interface CheckboxBaseProps extends BaseSwitchBaseProps {
  muiProps?: MuiCheckboxProps;
}

export const CheckboxBase = (props: CheckboxBaseProps) => {
  return (
    <AbstractSwitchBase<MuiCheckboxProps>
      {...props}
      Component={MuiCheckbox}
      checkedIcon={<CheckBoxSharpIcon />}
      icon={<CheckBoxOutlineBlankSharpIcon />}
    />
  );
};

CheckboxBase.displayName = "CheckboxBase";
CheckboxBase.defaultProps = {
  "data-id": "checkboxBase",
};
