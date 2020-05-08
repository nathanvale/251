import React from "react";
import { RadioProps as MuiRadioProps } from "@material-ui/core";
import { BaseSwitchProps } from "@origin-digital/ods-types";
import { RadioBase } from "../RadioBase/RadioBase";
import { AbstractSwitch } from "../_private/components/AbstractSwitch/AbstractSwitch";
import { SwitchMuiProps } from "../_private/components/AbstractSwitch/abstract-types";

export type RadioMuiPropsType = SwitchMuiProps<MuiRadioProps>;

export interface RadioProps extends BaseSwitchProps {
  muiProps?: RadioMuiPropsType;
}

export const Radio = (props: RadioProps) => {
  return (
    <AbstractSwitch<MuiRadioProps, RadioMuiPropsType>
      {...props}
      Component={RadioBase}
    />
  );
};

Radio.displayName = "Radio";
Radio.defaultProps = { "data-id": "radio" };
