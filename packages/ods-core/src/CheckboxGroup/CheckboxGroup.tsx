import React from "react";
import { FormGroupElements, LabelElements } from "@origin-digital/ods-types";
import {
  ControlGroup,
  ControlGroupMuiProps,
  ControlGroupProps,
} from "../ControlGroup/ControlGroup";
import { Stack } from "../Stack/Stack";

export interface CheckboxGroupProps extends ControlGroupProps {
  groupComponent?: FormGroupElements;
  labelComponent?: LabelElements;
  label?: string;
  helperText?: string;
  muiProps?: ControlGroupMuiProps;
}

export const CheckboxGroup = ({ children, ...others }: CheckboxGroupProps) => {
  return (
    <ControlGroup {...others}>
      <Stack space="xsmall">{children}</Stack>
    </ControlGroup>
  );
};

CheckboxGroup.displayName = "CheckboxGroup";
CheckboxGroup.defaultProps = {
  "data-id": "checkbox-group",
  groupComponent: "fieldset",
  labelComponent: "legend",
};
