import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { DatePickerProvider } from "../DatePickerProvider/DatePickerProvider";
import { DatePicker } from "./DatePicker";

test("it renders", () => {
  const { container } = render(
    <DatePickerProvider>
      <DatePicker
        id="datepicker"
        data-id="test"
        label="Date of birth"
        value={new Date(1977, 5, 8)}
        helperText="Enter your date of birth"
      />
    </DatePickerProvider>
  );
  expect(container).toMatchSnapshot();
});

test("it should render error", () => {
  const { container } = render(
    <DatePickerProvider>
      <DatePicker id="datepicker" error />
    </DatePickerProvider>
  );
  expect(container).toMatchSnapshot();
});
