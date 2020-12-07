import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Keyboard } from "./Keyboard";

test("it renders a Keyboard", () => {
  const { container } = render(<Keyboard />);
  expect(container.firstChild).toMatchSnapshot();
});
