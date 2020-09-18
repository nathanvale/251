import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Tab } from "../Tab";

test("it renders", () => {
  const { container } = render(<Tab label="Melbourne" id="mlb" value="mlb" />);
  expect(container).toMatchSnapshot();
});
