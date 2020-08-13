import React from "react";
import { KeyboardDatePickerProps as MuiKeyboardDatePickerProps } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ComponentDocs } from "@origin-digital/ods-types";
import { parse, isWeekend, isBefore, addDays, isValid } from "date-fns";
import { DatePickerProvider } from "../DatePickerProvider/DatePickerProvider";
import { defaultDateFormat } from "../DatePickerBase/DatePickerBase";
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from "./KeyboardDatePicker";

export const docs: ComponentDocs<KeyboardDatePickerProps> = {
  category: "Interaction",
  componentName: "DatePicker",
  description:
    "A DatePicker is a special type of input field, which renders a calendar from which the user can select a date. This component also allows keyboard date entry. Note: Your app should be wrapped in a DatePickerProvider for this to work.",
  propDescriptions: {},
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <DatePickerProvider>
          <KeyboardDatePicker id="datepicker" defaultValue={new Date()} />
        </DatePickerProvider>
      ),
    },
    additional: [
      {
        label: "Label",
        Code: () => (
          <DatePickerProvider>
            <KeyboardDatePicker id="datepicker" label="Date of birth" />
          </DatePickerProvider>
        ),
      },
      {
        label: "Format",
        Code: () => (
          <DatePickerProvider>
            <KeyboardDatePicker
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
            <KeyboardDatePicker
              id="datepicker"
              label="Connection date"
              disabled
            />
          </DatePickerProvider>
        ),
      },
      {
        label: "Controlled",
        codeString: `
        const [selectedDate, handleDateChange] = React.useState<
        MaterialUiPickersDate
      >(new Date());
      return (
        <DatePickerProvider>
          <KeyboardDatePicker
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
              <KeyboardDatePicker
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
        description:
          "In this example we disable dates in both the picker and the text field. The text field will error after it is touched (first blur).",
        codeString: `
        import { parse, isWeekend, isBefore, addDays, isValid } from "date-fns";
        import { DatePickerProvider } from "../DatePickerProvider/DatePickerProvider";
        import { DatePicker, DatePickerProps, defaultDateFormat } from "./DatePicker";

        const isUnavailableDate = (date: Date) =>
        isWeekend(date) || isBefore(date, addDays(new Date(), 1));
      const [selectedDate, setSelectedDate] = React.useState();
      const [helperText, setHelperText] = React.useState("");
      const [error, setError] = React.useState(false);
      const [touched, setTouched] = React.useState(false);

      const updateIfValid = (date: MaterialUiPickersDate) => {
        if (!isValid(date)) {
          setHelperText("Please enter date in format DD/MM/YYYY");
          setError(true);
        } else if (!isUnavailableDate(date)) {
          setError(false);
          setSelectedDate(date);
          setHelperText("You'll be connected between 7am and 7pm");
        } else {
          setError(true);
          setHelperText(
            "Must be a business day and 2 or more days in the future"
          );
        }
      };

      const handleChange = (date: MaterialUiPickersDate) => {
        if (!touched) {
          return;
        }
        updateIfValid(date);
      };
      const onBlur = (event: any) => {
        setTouched(true);
        updateIfValid(
          parse(event.target.value, defaultDateFormat, new Date())
        );
      };
      const onAccept = (date: Date) => {
        setTouched(true);
        updateIfValid(date);
      };

      return (
        <DatePickerProvider>
          <KeyboardDatePicker
            id="datepicker"
            label="Connection date (DD/MM/YYYY)"
            value={selectedDate}
            onChange={handleChange}
            shouldDisableDate={isUnavailableDate}
            helperText={helperText}
            error={error}
            muiProps={{ onBlur, onAccept } as MuiKeyboardDatePickerProps}
          />
        </DatePickerProvider>
      );`,
        Code: () => {
          const isUnavailableDate = (date: MaterialUiPickersDate) =>
            !!date &&
            (isWeekend(date) || isBefore(date, addDays(new Date(), 1)));
          const [selectedDate, setSelectedDate] = React.useState<
            MaterialUiPickersDate
          >();
          const [helperText, setHelperText] = React.useState("");
          const [error, setError] = React.useState(false);
          const [touched, setTouched] = React.useState(false);

          const updateIfValid = (date: MaterialUiPickersDate) => {
            if (!isValid(date)) {
              setHelperText("Please enter date in format DD/MM/YYYY");
              setError(true);
            } else if (!isUnavailableDate(date)) {
              setError(false);
              setSelectedDate(date);
              setHelperText("You'll be connected between 7am and 7pm");
            } else {
              setError(true);
              setHelperText(
                "Must be a business day and 2 or more days in the future"
              );
            }
          };

          const handleChange = (date: MaterialUiPickersDate) => {
            if (!touched) {
              return;
            }
            updateIfValid(date);
          };
          const onBlur = (event: any) => {
            setTouched(true);
            updateIfValid(
              parse(event.target.value, defaultDateFormat, new Date())
            );
          };
          const onAccept = (date: Date) => {
            setTouched(true);
            updateIfValid(date);
          };

          return (
            <DatePickerProvider>
              <KeyboardDatePicker
                id="datepicker"
                label="Connection date (DD/MM/YYYY)"
                value={selectedDate}
                onChange={handleChange}
                shouldDisableDate={isUnavailableDate}
                helperText={helperText}
                error={error}
                muiProps={{ onBlur, onAccept } as MuiKeyboardDatePickerProps}
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
          <KeyboardDatePicker id="datepicker" defaultValue={new Date()} />
        </DatePickerProvider>
      ),
    },
    {
      label: "Disable future dates",
      Code: () => (
        <DatePickerProvider>
          <KeyboardDatePicker
            id="datepicker"
            label="Date of birth"
            disableFuture
          />
        </DatePickerProvider>
      ),
    },
    {
      label: "Disable past dates",
      Code: () => (
        <DatePickerProvider>
          <KeyboardDatePicker
            id="datepicker"
            label="Connection date"
            disablePast
          />
        </DatePickerProvider>
      ),
    },
    {
      label: "Custom format",
      Code: () => (
        <DatePickerProvider>
          <KeyboardDatePicker
            id="datepicker"
            label="Connection date"
            format="d/M/yyyy"
          />
        </DatePickerProvider>
      ),
    },
  ],
};
