import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { FormLabel } from "./FormLabel";

test("renders a label with default data-id", () => {
  const { container } = render(<FormLabel id="mylbl">Some label</FormLabel>);

  expect(container).toMatchSnapshot();
});

test("renders a legend element", () => {
  const { container } = render(
    <FormLabel id="mylbl" component="legend">
      Some label
    </FormLabel>,
  );

  expect(container.getElementsByTagName("label")).toHaveLength(0);
  expect(container.getElementsByTagName("legend")).toHaveLength(1);
});

test("When the label is focused, the color remains grey.", () => {
  const { container } = render(<FormLabel id="mylbl">Some label</FormLabel>);
  const labelEl = container.getElementsByTagName("label")[0];
  let styles = window.getComputedStyle(labelEl);
  expect(styles.color).toBe("rgb(80, 80, 80)");

  labelEl.focus();

  styles = window.getComputedStyle(labelEl);
  expect(styles.color).toBe("rgb(80, 80, 80)");
});
