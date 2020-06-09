import * as React from "react";
import MuiSelect, { SelectProps as ISelect } from "@material-ui/core/Select";
import { FormControl, FormHelperText } from "@origin-digital/ods-core";
import { MenuItem, InputLabel } from "..";

interface ISelectProps extends ISelect {
  label: string;
  value: number | string;
}

export interface SelectProps extends ISelectProps {
  "data-id"?: string;
  label: string;
  selects: ISelectProps[];
  helpText?: string;
  required?: boolean;
  fullWidth?: boolean;
}

export const Select = (props: SelectProps) => {
  const {
    fullWidth,
    required,
    label,
    onChange,
    value,
    defaultValue,
    selects,
    error,
    helpText,
    ...other
  } = props;
  return (
    <FormControl muiProps={{ fullWidth }}>
      <InputLabel id={label} error={error}>
        {label}
      </InputLabel>
      <MuiSelect
        id="select"
        labelId={label}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        error={error}
        {...other}
      >
        {selects.map((r) => (
          <MenuItem
            key={r.value}
            data-id={props["data-id"]}
            disabled={r.disabled}
            value={r.value}
            color={r.color ? r.color : "default"}
          >
            {r.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helpText && (
        <FormHelperText id="select-helper-text" error={error}>
          {helpText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
