import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { FormHelperText } from "./FormHelperText";

test("it renders the text as a paragraph", () => {
  const { container } = render(
    <FormHelperText id="helperText" data-id="helperTextDataId">
      This is a simple helper text
    </FormHelperText>,
  );

  expect(container).toMatchSnapshot();
});

test("it passes down id, data-id and children text", () => {
  const { getAllByText } = render(
    <FormHelperText id="helperText" data-id="helperTextDataId">
      This is a simple helper text
    </FormHelperText>,
  );

  const items = getAllByText("This is a simple helper text");

  expect(items).toHaveLength(1);
  expect(items[0].getAttribute("id")).toEqual("helperText");
  expect(items[0].getAttribute("data-id")).toEqual("helperTextDataId");
});
