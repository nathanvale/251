import React from "react";
import MuiCheckbox, {
  CheckboxProps as MUICheckboxProps,
} from "@material-ui/core/Checkbox";
import {FormControlLabel} from "../_private/components/FormControlLabel/FormControlLabel";
import {FormHelperText} from "../_private/components/FormHelperText/FormHelperText";

export interface CheckboxProps {
  name: string;
  checked: boolean;
  "data-id"?: string;
  label: string;
  error?: boolean;
  onChange: MUICheckboxProps["onChange"];
  required?: boolean;
  disabled?: boolean;
  className?: string;
  helperText?: string;
  value?: string | number | string[];
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    "data-id": dataId,
    disabled,
    label,
    error,
    helperText,
    ...other
  } = props;
  return (
    <>
      <FormControlLabel
        data-id={dataId}
        disabled={disabled}
        label={label}
        control={
          <MuiCheckbox
            inputProps={{"aria-label": label}}
            disabled={disabled}
            {...other}
          />
        }
      />
      <FormHelperText>{helperText}</FormHelperText>
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </>
  );
};
