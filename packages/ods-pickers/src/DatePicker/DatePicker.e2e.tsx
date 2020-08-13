import * as React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { DatePickerProvider } from "../DatePickerProvider/DatePickerProvider";
import { DatePicker } from "./DatePicker";

export const tests: E2ETests = [
  {
    label: "DatePicker",
    Code: () => (
      <DatePickerProvider>
        <DatePicker id="datepicker" label="DatePicker" />
      </DatePickerProvider>
    ),
  },
  {
    label: "DatePicker open",
    Code: () => (
      <DatePickerProvider>
        <DatePicker
          id="datepicker"
          label="DatePicker"
          muiProps={{ open: true }}
        />
      </DatePickerProvider>
    ),
  },
];
