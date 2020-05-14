import React from "react";
import {
  RadioProps as MuiRadioProps,
  Radio as MuiRadio,
} from "@material-ui/core";
import { BaseSwitchBaseProps } from "@origin-digital/ods-types";
import { AbstractSwitchBase } from "../_private/components/AbstractSwitch/AbstractSwitchBase";

export interface RadioBaseProps extends BaseSwitchBaseProps {
  muiProps?: MuiRadioProps;
}

export const RadioBase = (props: RadioBaseProps) => {
  return <AbstractSwitchBase<MuiRadioProps> {...props} Component={MuiRadio} />;
};

RadioBase.displayName = "RadioBase";
RadioBase.defaultProps = {
  "data-id": "radio-base",
};
