import * as React from "react";
import { KeyboardDatePickerProps, DatePickerProps } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { MuiBasedComponentBaseProps } from "@origin-digital/ods-types";
import { TextField } from "@origin-digital/ods-core";
import { makeStyles, TextFieldProps, fade } from "@material-ui/core";

export const propDescriptions = {
  label: "Field label",
  defaultValue: "Default value for uncontrolled variant",
  format: "Display date format",
  value: "Current date value",
  onChange: "Function called when the input is changed",
  shouldDisableDate:
    "Function used to determine which dates are disabled in the picker",
  error: "Set the picker to be in error state",
  helperText: "Helper text displayed underneath the text field",
  minDate: "The minimum date that can be selected",
  maxDate: "The maximum date that can be selected",
  disableFuture: "Disable future dates",
  disablePast: "Disable past dates",
};

export interface DatePickerBaseProps extends MuiBasedComponentBaseProps {
  id: string;
  label?: string;
  defaultValue?: MaterialUiPickersDate;
  format?: string;
  value?: MaterialUiPickersDate;
  onChange?: (date: MaterialUiPickersDate) => void;
  shouldDisableDate?: (date: MaterialUiPickersDate) => boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  minDate?: MaterialUiPickersDate;
  maxDate?: MaterialUiPickersDate;
  error?: boolean;
  helperText?: string;
  muiProps?: Partial<KeyboardDatePickerProps> | Partial<DatePickerProps>;
}

const useDatePickerStyles = makeStyles(
  (theme) => ({
    paper: {
      border: `1px solid ${theme.palette.grey[200]}`,
      boxShadow: `${fade(theme.palette.grey[900], 0.176)} 0px 6px 12px`,
      "& .MuiPickersDay-daySelected": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.grey[500],
        "&:hover": {
          color: theme.palette.grey[500],
          backgroundColor: theme.palette.secondary.main,
        },
      },
      "& .MuiPickersDay-current": {
        color: theme.palette.grey[500],
      },
    },
  }),
  { classNamePrefix: "datepicker" }
);

export interface DatePickerBaseComponentProps extends DatePickerBaseProps {
  Component: React.FC<DatePickerProps> | React.FC<KeyboardDatePickerProps>;
}

export const DatePickerBase = ({
  value,
  defaultValue = null,
  onChange,
  muiProps,
  Component,
  ...others
}: DatePickerBaseComponentProps) => {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue
  );
  const uncontrolledChange = (newValue: MaterialUiPickersDate) =>
    setUncontrolledValue(newValue);

  const currentValue = value === undefined ? uncontrolledValue : value;
  const classes = useDatePickerStyles();

  return (
    <Component
      value={currentValue}
      onChange={onChange || uncontrolledChange}
      TextFieldComponent={TextField as React.ComponentType<TextFieldProps>}
      autoOk
      disableToolbar
      variant="inline"
      PopoverProps={{ classes }}
      {...others}
      {...muiProps}
    />
  );
};

export const defaultDateFormat = "dd/MM/yyyy";

DatePickerBase.defaultProps = {
  format: defaultDateFormat,
};
