import React from "react";
import { FormGroupElements, LabelElements } from "@origin-digital/ods-types";
import {
  ControlGroup,
  ControlGroupMuiProps,
  ControlGroupProps,
} from "../ControlGroup/ControlGroup";

export interface CheckboxGroupProps extends ControlGroupProps {
  groupComponent?: FormGroupElements;
  labelComponent?: LabelElements;
  label?: string;
  helperText?: string;
  muiProps?: ControlGroupMuiProps;
}

export const CheckboxGroup = ({ children, ...others }: CheckboxGroupProps) => {
  return <ControlGroup {...others}>{children}</ControlGroup>;
};

CheckboxGroup.displayName = "CheckboxGroup";
CheckboxGroup.defaultProps = {
  "data-id": "CheckboxGroup",
};
