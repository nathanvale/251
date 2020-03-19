import React from "react";
import { FormControlLabelProps as MuiFormControlLabelProps } from "@material-ui/core/FormControlLabel/FormControlLabel";
import { FormHelperTextProps as MuiFormHelperTextProps } from "@material-ui/core/FormHelperText/FormHelperText";
import {
  BaseSwitchBaseProps,
  BaseSwitchProps,
} from "@origin-digital/ods-types";

export interface SwitchBaseMuiProps {
  "aria-describedby"?: string;
  classes?: {};
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface SwitchMuiProps<CompMuiProps extends SwitchBaseMuiProps> {
  formControlLabelProps?: MuiFormControlLabelProps;
  componentProps?: CompMuiProps;
  formHelperTextProps?: MuiFormHelperTextProps;
}

export interface AbstractSwitchBaseProps<MuiProps extends SwitchBaseMuiProps>
  extends BaseSwitchBaseProps {
  Component: React.ComponentType<any>;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  muiProps?: MuiProps;
}

export interface AbstractSwitchProps<
  CompMuiProps,
  MuiProps extends SwitchMuiProps<CompMuiProps>
> extends BaseSwitchProps {
  Component: React.ComponentType<any>;
  muiProps?: MuiProps;
}
