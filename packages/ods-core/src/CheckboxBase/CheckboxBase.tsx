import React from "react";
import {
  IconCheckBoxOutlineBlankSharp,
  IconCheckBoxSharp,
} from "@origin-digital/ods-icons";

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
      Component={MuiCheckbox}
      checkedIcon={<IconCheckBoxSharp />}
      icon={<IconCheckBoxOutlineBlankSharp />}
      {...props}
    />
  );
};

CheckboxBase.displayName = "CheckboxBase";
CheckboxBase.defaultProps = {};
