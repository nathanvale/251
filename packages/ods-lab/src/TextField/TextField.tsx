import * as React from "react";
import MuiTextField, {
  StandardTextFieldProps as IStandardTextFieldProps,
} from "@material-ui/core/TextField";
import {InputAdornment, Icon} from "..";

export interface TextFieldProps extends IStandardTextFieldProps {
  "data-id": string;
}

export const TextField = (props: TextFieldProps) => {
  return (
    <MuiTextField
      InputProps={{
        endAdornment: props.value && !props.disabled && (
          <InputAdornment position="end" disablePointerEvents={true}>
            <Icon color={props.error ? "error" : "action"} fontSize="small">
              {props.error ? "error" : "check_circle"}
            </Icon>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
