import React from "react";
import { RadioProps as MuiRadioProps } from "@material-ui/core";
import { BaseSwitchProps, SwitchMuiProps } from "@origin-digital/ods-types";
import { RadioBase } from "../RadioBase";
import { AbstractSwitch } from "../_private/components/AbstractSwitch/AbstractSwitch";

export type RadioMuiPropsType = SwitchMuiProps<MuiRadioProps>;

export interface RadioProps extends BaseSwitchProps {
  muiProps?: RadioMuiPropsType;
}

export const Radio = (props: RadioProps) => {
  return (
    <AbstractSwitch<MuiRadioProps, RadioMuiPropsType>
      Component={RadioBase}
      {...props}
    />
  );
};

Radio.displayName = "Radio";
Radio.defaultProps = {};
