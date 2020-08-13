import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { IUtils } from "@date-io/core/IUtils";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

export interface DatePickerProviderProps {
  children: React.ReactNode;
  utils?: IUtils<Date>;
}

export const DatePickerProvider = ({
  children,
  utils,
}: DatePickerProviderProps) => (
  <MuiPickersUtilsProvider utils={utils}>{children}</MuiPickersUtilsProvider>
);

DatePickerProvider.defaultProps = {
  utils: DateFnsUtils,
};

DatePickerProvider.displayName = "DatePickerProvider";
