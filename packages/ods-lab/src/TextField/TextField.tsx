import * as React from "react";
import MuiTextField, {
  StandardTextFieldProps as IStandardTextFieldProps,
} from "@material-ui/core/TextField";
import { InputAdornment } from "@origin-digital/ods-core";
import { Icon } from "..";

export interface TextFieldProps extends IStandardTextFieldProps {
  "data-id": string;
}

export const TextField = (props: TextFieldProps) => {
  return (
    <MuiTextField
      InputProps={{
        endAdornment: props.value && !props.disabled && (
          <InputAdornment position="end">
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
