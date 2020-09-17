import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Checkbox } from "../Checkbox";
import { CheckboxGroup } from "./CheckboxGroup";

test("when disabled, the checkbox inputs become disabled as well", () => {
  const { container } = render(
    <CheckboxGroup
      id="cityGroup"
      label="Australia cities"
      helperText="You have to select at least one city."
      disabled
    >
      <Checkbox label="Melbourne" id="mlb" />
      <Checkbox label="Sydney" id="syd" />
      <Checkbox label="Perth" id="prt" />
    </CheckboxGroup>
  );

  const [mlb, syd, prt] = Array.from(container.getElementsByTagName("input"));

  expect(mlb).toHaveAttribute("disabled");
  expect(syd).toHaveAttribute("disabled");
  expect(prt).toHaveAttribute("disabled");
});
