import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Radio } from "./Radio";

test("it renders an unchecked Radio with label", () => {
  const { container } = render(<Radio label="Check 1" id="my-radio" />);

  expect(container).toMatchSnapshot();
});

test("it shows correct label", () => {
  const { getAllByText } = render(<Radio label="Check 1" id="my-radio" />);

  const items = getAllByText("Check 1");
  expect(items).toHaveLength(1);
  expect(items[0]).toHaveClass("MuiFormControlLabel-label");
});

test("it renders a Radio in error state correctly", () => {
  const { container } = render(<Radio label="Check 1" id="my-radio" error />);

  expect(container).toMatchSnapshot();
});

test("it renders a disabled Radio", () => {
  const { container } = render(
    <Radio label="Check 1" id="my-radio" disabled />
  );

  expect(container).toMatchSnapshot();
});
