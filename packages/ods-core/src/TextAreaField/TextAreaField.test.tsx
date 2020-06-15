import React from "react";
import {
  fireEvent,
  queryByAttribute,
  render,
} from "@origin-digital/ods-testing-library";
import { TextAreaField } from "./TextAreaField";

test("renders a textarea element", () => {
  const { getByTestId } = render(
    <TextAreaField id="my-taf" label="TextArea" />
  );

  const input = getByTestId("my-taf-input") as HTMLTextAreaElement;

  expect(input.tagName.toLowerCase()).toEqual("textarea");
});

test("renders multiple rows", () => {
  const { container } = render(
    <TextAreaField id="my-taf" label="TextArea" rows="3" rowsMax="6" />
  );

  expect(container).toMatchSnapshot();
});

test(`should render a TextAreaField in error state`, () => {
  const { container } = render(
    <TextAreaField
      id="my-text-area-field"
      label="The title"
      helperText="This is the info"
      error
    />
  );

  const label = queryByAttribute(
    "data-id",
    container,
    "my-text-area-field-label"
  );
  const helperText = queryByAttribute(
    "data-id",
    container,
    "my-text-area-field-helper-text"
  );

  expect(label).toHaveClass("Mui-error");
  expect(helperText).toHaveClass("Mui-error");
});

test("when a text is entered onChanged is called with the value of input", () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <TextAreaField id="my-taf" onChange={onChange} />
  );

  const input = getByTestId("my-taf-input") as HTMLTextAreaElement;

  expect(input.value).toEqual("");

  fireEvent.change(input, { target: { value: "John" } });

  expect(onChange).toHaveBeenCalled();
  expect(input?.value).toEqual("John");
});
