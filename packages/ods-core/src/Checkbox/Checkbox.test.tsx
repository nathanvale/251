import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Checkbox } from "./Checkbox";

test("it renders an unchecked Checkbox with label", () => {
  const { container } = render(<Checkbox label="Check 1" id="my-checkbox" />);

  expect(container).toMatchSnapshot();
});

test("it shows correct label", () => {
  const { getAllByText } = render(
    <Checkbox label="Check 1" id="my-checkbox" />
  );

  const items = getAllByText("Check 1");
  expect(items).toHaveLength(1);
  expect(items[0]).toHaveClass("MuiFormControlLabel-label");
});

test("it renders a Checkbox in error state correctly", () => {
  const { container } = render(
    <Checkbox label="Check 1" id="my-checkbox" error />
  );

  expect(container).toMatchSnapshot();
});

test("it renders a disabled Checkbox", () => {
  const { container } = render(
    <Checkbox label="Check 1" id="my-checkbox" disabled />
  );

  expect(container).toMatchSnapshot();
});
