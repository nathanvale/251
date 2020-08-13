import * as React from "react";
import { KeyboardDatePicker as MuiKeyboardDatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import {
  DatePickerBaseProps,
  DatePickerBase,
} from "../DatePickerBase/DatePickerBase";

export interface KeyboardDatePickerProps extends DatePickerBaseProps {
  minDateMessage?: React.ReactNode | string;
  maxDateMessage?: React.ReactNode | string;
  invalidDateMessage?: React.ReactNode | string;
  onError?: (error: React.ReactNode, value: MaterialUiPickersDate) => void;
}

export const KeyboardDatePicker = (props: KeyboardDatePickerProps) => (
  <DatePickerBase {...props} Component={MuiKeyboardDatePicker} />
);

KeyboardDatePicker.displayName = "KeyboardDatePicker";
KeyboardDatePicker.defaultProps = { "data-id": "keyboard-date-picker" };
