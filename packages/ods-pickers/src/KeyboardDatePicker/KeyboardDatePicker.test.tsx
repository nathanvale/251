import React from "react";
import { fireEvent, render } from "@origin-digital/ods-testing-library";
import { DatePickerProvider } from "../DatePickerProvider/DatePickerProvider";
import { KeyboardDatePicker } from "./KeyboardDatePicker";

test("it renders", () => {
  const { container } = render(
    <DatePickerProvider>
      <KeyboardDatePicker
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

test("it can be updated with the keyboard", () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <DatePickerProvider>
      <KeyboardDatePicker
        id="datepicker"
        data-id="test"
        label="Date of birth"
        value={new Date(1977, 5, 8)}
        helperText="Enter your date of birth"
        onChange={onChange}
      />
    </DatePickerProvider>
  );
  const input = getByTestId("test-input") as HTMLInputElement;

  expect(input.value).toEqual("08/06/1977");

  fireEvent.change(input, { target: { value: "03/11/2020" } });

  expect(onChange).toHaveBeenCalled();
  expect(input?.value).toEqual("03/11/2020");
});

test("it should render error", () => {
  const { container } = render(
    <DatePickerProvider>
      <KeyboardDatePicker id="datepicker" error />
    </DatePickerProvider>
  );
  expect(container).toMatchSnapshot();
});
