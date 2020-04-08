import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { FormControl } from "./FormControl";

test("renders a fieldset with default data-id", () => {
  const { container } = render(<FormControl id="myfc">Some label</FormControl>);

  expect(container).toMatchSnapshot();
});

test("renders a div element", () => {
  const { container } = render(
    <FormControl id="mylbl" component="div">
      Some label
    </FormControl>
  );

  expect(container.getElementsByTagName("fieldset")).toHaveLength(0);
  expect(container.getElementsByTagName("div")).toHaveLength(1);
});
