import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Spinner, SpinnerProps } from "./Spinner";

const renderSpinner = (spinnerProps: Partial<SpinnerProps> = {}) =>
  render(<Spinner {...spinnerProps} />);

test("It renders in default", () => {
  const { container } = renderSpinner();
  expect(container).toMatchSnapshot();
});
