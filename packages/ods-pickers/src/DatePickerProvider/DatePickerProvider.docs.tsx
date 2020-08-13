import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { DatePicker } from "../DatePicker/DatePicker";
import {
  DatePickerProvider,
  DatePickerProviderProps,
} from "./DatePickerProvider";

export const docs: ComponentDocs<DatePickerProviderProps> = {
  category: "Logic",
  componentName: "DatePickerProvider",
  description:
    "DatePickerProvider should wrap your app and allows you to pass in a date management library of your choice. If one is not provided, it will default to date-fns. Under the hood this is just a wrapper for MuiPickersUtilsProvider https://material-ui-pickers.dev/getting-started/usage",
  propDescriptions: { utils: "Date management lib of your choice" },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <DatePickerProvider>
          <DatePicker
            id="datepicker"
            label="Connection date"
            defaultValue={new Date()}
          />
        </DatePickerProvider>
      ),
    },
  },
  snippets: [],
};
