import React from "react";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ComponentDocs } from "@origin-digital/ods-types";
import { isWeekend, isBefore, addDays } from "date-fns";
import { DatePickerProvider } from "../DatePickerProvider/DatePickerProvider";
import { propDescriptions } from "../DatePickerBase/DatePickerBase";
import { DatePicker, DatePickerProps } from "./DatePicker";

export const docs: ComponentDocs<DatePickerProps> = {
  category: "Interaction",
  componentName: "DatePicker",
  description:
    "A DatePicker is a special type of input field, which renders a calendar from which the user can select a date. For improved accessibility via keyboard date entry, please use KeyboardDatePicker if possible. Note: Your app should be wrapped in a DatePickerProvider for this to work.",
  propDescriptions,
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <DatePickerProvider>
          <DatePicker id="datepicker" defaultValue={new Date()} />
        </DatePickerProvider>
      ),
    },
    additional: [
      {
        label: "Label",
        Code: () => (
          <DatePickerProvider>
            <DatePicker id="datepicker" label="Date of birth" disableFuture />
          </DatePickerProvider>
        ),
      },
      {
        label: "Format",
        Code: () => (
          <DatePickerProvider>
            <DatePicker
              id="datepicker"
              label="Date of birth"
              defaultValue={new Date(2020, 1, 1)}
              format="d/M/yyyy"
            />
          </DatePickerProvider>
        ),
      },
      {
        label: "Disabled picker",
        Code: () => (
          <DatePickerProvider>
            <DatePicker id="datepicker" label="Connection date" disabled />
          </DatePickerProvider>
        ),
      },
      {
        label: "Controlled",
        codeString: `
        const [selectedDate, handleDateChange] = React.useState(new Date());
        return (
          <DatePickerProvider>
            <DatePicker
              id="datepicker"
              label="Date of birth"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </DatePickerProvider>
        );
        `,
        Code: () => {
          const [selectedDate, handleDateChange] = React.useState<
            MaterialUiPickersDate
          >(new Date());
          return (
            <DatePickerProvider>
              <DatePicker
                id="datepicker"
                label="Date of birth"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </DatePickerProvider>
          );
        },
        playroom: false,
      },
      {
        label: "Disable dates",
        description: "In this example we disable dates in the picker",
        codeString: `
        import { isWeekend, isBefore, addDays } from "date-fns";
        import { DatePickerProvider } from "../DatePickerProvider/DatePickerProvider";
        import { DatePicker, DatePickerProps, defaultDateFormat } from "./DatePicker";

        const isUnavailableDate = (date: MaterialUiPickersDate) => {
          if (!date) {
            return false;
          }
          return isWeekend(date) || isBefore(date, addDays(new Date(), 1));
        };
        const [selectedDate, setSelectedDate] = React.useState<
          MaterialUiPickersDate
        >();
        const handleChange = (date: MaterialUiPickersDate) =>
          setSelectedDate(date);

        return (
          <DatePickerProvider>
            <DatePicker
              id="datepicker"
              label="Connection date (DD/MM/YYYY)"
              value={selectedDate}
              onChange={handleChange}
              shouldDisableDate={isUnavailableDate}
            />
          </DatePickerProvider>
        );
      `,
        Code: () => {
          const isUnavailableDate = (date: MaterialUiPickersDate) => {
            if (!date) {
              return false;
            }
            return isWeekend(date) || isBefore(date, addDays(new Date(), 1));
          };
          const [selectedDate, setSelectedDate] = React.useState<
            MaterialUiPickersDate
          >();
          const handleChange = (date: MaterialUiPickersDate) =>
            setSelectedDate(date);

          return (
            <DatePickerProvider>
              <DatePicker
                id="datepicker"
                label="Connection date (DD/MM/YYYY)"
                value={selectedDate}
                onChange={handleChange}
                shouldDisableDate={isUnavailableDate}
              />
            </DatePickerProvider>
          );
        },
        playroom: false,
      },
    ],
  },
  snippets: [
    {
      label: "Simple case",
      Code: () => (
        <DatePickerProvider>
          <DatePicker id="datepicker" defaultValue={new Date()} />
        </DatePickerProvider>
      ),
    },
    {
      label: "Disable future dates",
      Code: () => (
        <DatePickerProvider>
          <DatePicker id="datepicker" label="Date of birth" disableFuture />
        </DatePickerProvider>
      ),
    },
    {
      label: "Disable past dates",
      Code: () => (
        <DatePickerProvider>
          <DatePicker id="datepicker" label="Connection date" disablePast />
        </DatePickerProvider>
      ),
    },
    {
      label: "Custom format",
      Code: () => (
        <DatePickerProvider>
          <DatePicker
            id="datepicker"
            label="Connection date"
            format="d/M/yyyy"
          />
        </DatePickerProvider>
      ),
    },
  ],
};
