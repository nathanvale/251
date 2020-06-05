import * as React from "react";
import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps,
} from "@material-ui/core";
import { BaseFormStateProps } from "@origin-digital/ods-types";

export interface InputAdornmentProps extends BaseFormStateProps {
  position: "start" | "end";
  component?: React.ComponentType;
  muiProps?: MuiInputAdornmentProps;
}

export const InputAdornment = ({
  muiProps = {} as any,
  ...others
}: InputAdornmentProps) => <MuiInputAdornment {...muiProps} {...others} />;

InputAdornment.displayName = "InputAdornment";
InputAdornment.defaultProps = {
  component: "span",
  "data-id": "input-adornment",
};
