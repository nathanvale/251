import React from "react";
import {
  fireEvent,
  queryByAttribute,
  render,
} from "@origin-digital/ods-testing-library";
import { SelectField } from "./SelectField";

test(`should render a SelectField`, () => {
  const { container } = render(
    <SelectField
      id="my-select-field"
      label="The title"
      helperText="This is the info"
      options={[
        { value: "syd", label: "Sydney" },
        { value: "mlb", label: "Melbourne" },
        { value: "prt", label: "Perth" },
      ]}
    />
  );

  expect(container).toMatchSnapshot();
});

test(`should render a SelectField with empty option`, () => {
  const { container } = render(
    <SelectField
      id="my-select-field"
      label="The title"
      helperText="This is the info"
      displayEmpty
      emptyAriaLabel="Empty"
      options={[
        { value: "syd", label: "Sydney" },
        { value: "mlb", label: "Melbourne" },
        { value: "prt", label: "Perth" },
      ]}
    />
  );

  expect(container).toMatchSnapshot();
});

test(`should render a SelectField with customised options`, () => {
  const { container } = render(
    <SelectField
      id="my-select-field"
      label="The title"
      helperText="This is the info"
      displayEmpty
      emptyAriaLabel="Empty"
    >
      <optgroup label="NSW">
        <option value="sydney">Sydney</option>
        <option value="newcastle">New Castle</option>
      </optgroup>
      <optgroup label="VIC">
        <option value="melbourne">Melbourne</option>
        <option value="bendigo">Bendigo</option>
      </optgroup>
    </SelectField>
  );

  expect(container).toMatchSnapshot();
});

test(`should render a SelectField options if both options and children props are provided`, () => {
  const { container } = render(
    <SelectField
      id="my-select-field"
      label="The title"
      helperText="This is the info"
      options={[
        { value: "cbr", label: "Canberra" },
        { value: "prt", label: "Perth" },
      ]}
    >
      <optgroup label="NSW">
        <option value="sydney">Sydney</option>
        <option value="newcastle">New Castle</option>
      </optgroup>
      <optgroup label="VIC">
        <option value="melbourne">Melbourne</option>
        <option value="bendigo">Bendigo</option>
      </optgroup>
    </SelectField>
  );

  const options = container.getElementsByTagName("option");
  expect(options).toHaveLength(2);
  expect(options.item(0)).toHaveTextContent("Canberra");
  expect(options.item(1)).toHaveTextContent("Perth");
  expect(container).toMatchSnapshot();
});

test(`should render a SelectField in error state`, () => {
  const { container } = render(
    <SelectField
      id="my-select-field"
      label="The title"
      helperText="This is the info"
      error
      options={[
        { value: "syd", label: "Sydney" },
        { value: "mlb", label: "Melbourne" },
        { value: "prt", label: "Perth" },
      ]}
    />
  );

  const label = queryByAttribute("data-id", container, "my-select-field-label");
  const helperText = queryByAttribute(
    "data-id",
    container,
    "my-select-field-helper-text"
  );

  expect(label).toHaveClass("Mui-error");
  expect(helperText).toHaveClass("Mui-error");
});

test("it passes down id and data-id", () => {
  const { getByTestId } = render(
    <SelectField
      data-id="select-field-base"
      id="my-select-field"
      options={[
        { value: "syd", label: "Sydney" },
        { value: "mlb", label: "Melbourne" },
        { value: "prt", label: "Perth" },
      ]}
    />
  );

  const SelectFieldRoot = getByTestId("select-field-base") as HTMLDivElement;
  const select = getByTestId("select-field-base-input") as HTMLSelectElement;

  expect(SelectFieldRoot).toBeDefined();
  expect(select?.tagName.toLowerCase()).toEqual("select");
});

test("when a select is entered onChanged is called with the value of input", () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <SelectField
      id="my-select-field"
      onChange={onChange}
      displayEmpty
      emptyAriaLabel="Empty"
      options={[
        { value: "syd", label: "Sydney" },
        { value: "mlb", label: "Melbourne" },
        { value: "prt", label: "Perth" },
      ]}
    />
  );

  const select = getByTestId("my-select-field-input") as HTMLSelectElement;

  expect(select.value).toEqual("");

  fireEvent.change(select, { target: { value: "mlb" } });

  expect(onChange).toHaveBeenCalled();
  expect(select?.value).toEqual("mlb");
  expect(select?.selectedIndex).toEqual(2);
});
