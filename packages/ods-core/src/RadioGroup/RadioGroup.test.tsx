import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Radio } from "../Radio";
import { RadioGroup } from "./RadioGroup";

test("it selects only one Radio in the group when one clicked", () => {
  let value: any;
  function setValue(v?: string) {
    value = v;
  }
  const { container } = render(
    <RadioGroup
      name="cities"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="Cities"
    >
      <Radio label="Melbourne" id="mlb" value="mlb" />
      <Radio label="Sydney" id="syd" value="syd" />
      <Radio label="Perth" id="prt" value="prt" />
    </RadioGroup>
  );

  const [mlbInput, sydInput, prtInput] = Array.from(
    container.getElementsByTagName("input")
  );

  sydInput.click();

  expect(mlbInput.checked).toBe(false);
  expect(sydInput.checked).toBe(true);
  expect(prtInput.checked).toBe(false);
});
