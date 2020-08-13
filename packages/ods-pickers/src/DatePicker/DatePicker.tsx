import * as React from "react";
import { DatePicker as MuiDatePicker } from "@material-ui/pickers";
import {
  DatePickerBaseProps,
  DatePickerBase,
} from "../DatePickerBase/DatePickerBase";

export interface DatePickerProps extends DatePickerBaseProps {}

export const DatePicker = (props: DatePickerProps) => (
  <DatePickerBase {...props} Component={MuiDatePicker} />
);

DatePicker.displayName = "DatePicker";
DatePicker.defaultProps = { "data-id": "date-picker" };
