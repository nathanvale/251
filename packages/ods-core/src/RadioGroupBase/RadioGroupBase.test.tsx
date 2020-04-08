import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Radio } from "../Radio/Radio";
import { RadioGroupBase } from "./RadioGroupBase";

test("it selects only one Radio in the group when one clicked", () => {
  let value: any;
  function setValue(v?: string) {
    value = v;
  }
  const { container } = render(
    <RadioGroupBase
      name="cities"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <Radio label="Melbourne" id="mlb" value="mlb" />
      <Radio label="Sydney" id="syd" value="syd" />
      <Radio label="Perth" id="prt" value="prt" />
    </RadioGroupBase>
  );

  const [mlbInput, sydInput, prtInput] = Array.from(
    container.getElementsByTagName("input")
  );

  mlbInput.click();

  expect(mlbInput.checked).toBe(true);
  expect(sydInput.checked).toBe(false);
  expect(prtInput.checked).toBe(false);

  sydInput.click();

  expect(mlbInput.checked).toBe(false);
  expect(sydInput.checked).toBe(true);
  expect(prtInput.checked).toBe(false);

  prtInput.click();

  expect(mlbInput.checked).toBe(false);
  expect(sydInput.checked).toBe(false);
  expect(prtInput.checked).toBe(true);
});

test("when value is undefined, no radio is selected", () => {
  let value: any;
  function setValue(v?: string) {
    value = v;
  }
  const { container } = render(
    <RadioGroupBase
      name="cities"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <Radio label="Melbourne" id="mlb" value="mlb" />
      <Radio label="Sydney" id="syd" value="syd" />
      <Radio label="Perth" id="prt" value="prt" />
    </RadioGroupBase>
  );

  const [mlbInput, sydInput, prtInput] = Array.from(
    container.getElementsByTagName("input")
  );

  expect(mlbInput.checked).toBe(false);
  expect(sydInput.checked).toBe(false);
  expect(prtInput.checked).toBe(false);
});

test("when value is set, the corresponding radio is selected", () => {
  let value: any = "syd";
  function setValue(v?: string) {
    value = v;
  }
  const { container } = render(
    <RadioGroupBase
      name="cities"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <Radio label="Melbourne" id="mlb" value="mlb" />
      <Radio label="Sydney" id="syd" value="syd" />
      <Radio label="Perth" id="prt" value="prt" />
    </RadioGroupBase>
  );

  const [mlbInput, sydInput, prtInput] = Array.from(
    container.getElementsByTagName("input")
  );

  expect(mlbInput.checked).toBe(false);
  expect(sydInput.checked).toBe(true);
  expect(prtInput.checked).toBe(false);
});
