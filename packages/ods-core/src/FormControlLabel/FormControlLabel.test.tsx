import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { FormControlLabel } from "./FormControlLabel";

test("it renders an icon and embeds the control inside it", () => {
  const { container } = render(
    <FormControlLabel
      id="helperText"
      label="This is a simple label"
      control={<div id="childControl" />}
    />,
  );

  expect(container).toMatchSnapshot();
});
