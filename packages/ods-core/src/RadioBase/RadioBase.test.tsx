import React from "react";
import { queryByAttribute, render } from "@origin-digital/ods-testing-library";
import { RadioBase } from "./RadioBase";

test("it renders an unchecked RadioBase", () => {
  const { container } = render(<RadioBase id="radioInput" />);

  expect(container).toMatchSnapshot();
});

test("it renders a checked RadioBase", () => {
  const { container } = render(<RadioBase id="radioInput" checked />);

  expect(container).toMatchSnapshot();
});

test("it renders a RadioBase in error", () => {
  const { container } = render(<RadioBase id="radioInput" error />);

  expect(container).toMatchSnapshot();
});

test("it renders a disabled RadioBase", () => {
  const { container } = render(<RadioBase id="radioInput" disabled />);

  expect(container).toMatchSnapshot();
});

describe("uncontrolled RadioBase", () => {
  test("it passes down id and data-id", () => {
    const { container } = render(
      <RadioBase data-id="radioRoot" id="myRadio" />
    );

    const chkRoot = queryByAttribute("data-id", container, "radioRoot");
    const input = queryByAttribute("id", container, "myRadio");

    expect(chkRoot).toBeDefined();
    expect(input?.tagName.toLowerCase()).toEqual("input");
  });

  test("it is clicked, it will set Mui-Checked prop", () => {
    const { container } = render(
      <RadioBase data-id="radioRoot" id="myRadio" />
    );

    const chkRoot = queryByAttribute("data-id", container, "radioRoot");
    const input = queryByAttribute("id", container, "myRadio");

    expect(chkRoot).not.toHaveClass("Mui-checked");

    input?.click();

    expect(chkRoot).toHaveClass("Mui-checked");
  });
});
