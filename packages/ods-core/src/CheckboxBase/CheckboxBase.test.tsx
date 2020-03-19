import React from "react";
import { queryByAttribute, render } from "@origin-digital/ods-testing-library";
import { CheckboxBase } from "./CheckboxBase";

test("it renders an unchecked CheckboxBase", () => {
  const { container } = render(<CheckboxBase id="checkboxInput" />);

  expect(container).toMatchSnapshot();
});

test("it renders a checked CheckboxBase", () => {
  const { container } = render(<CheckboxBase id="checkboxInput" checked />);

  expect(container).toMatchSnapshot();
});

test("it renders a CheckboxBase in error", () => {
  const { container } = render(<CheckboxBase id="checkboxInput" error />);

  expect(container).toMatchSnapshot();
});

test("it renders a disabled CheckboxBase", () => {
  const { container } = render(<CheckboxBase id="checkboxInput" disabled />);

  expect(container).toMatchSnapshot();
});

describe("uncontrolled CheckboxBase", () => {
  test("it passes down id and data-id", () => {
    const { container } = render(
      <CheckboxBase data-id="checkboxRoot" id="mychk" />,
    );

    const chkRoot = queryByAttribute("data-id", container, "checkboxRoot");
    const input = queryByAttribute("id", container, "mychk");

    expect(chkRoot).toBeDefined();
    expect(input?.tagName.toLowerCase()).toEqual("input");
  });

  test("it is clicked, it will set Mui-Checked prop", () => {
    const { container } = render(
      <CheckboxBase data-id="checkboxRoot" id="mychk" />,
    );

    const chkRoot = queryByAttribute("data-id", container, "checkboxRoot");
    const input = queryByAttribute("id", container, "mychk");

    expect(chkRoot).not.toHaveClass("Mui-checked");

    input?.click();

    expect(chkRoot).toHaveClass("Mui-checked");
  });
});
