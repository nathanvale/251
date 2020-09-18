import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Radio } from "../Radio";
import { RadioGroupBase } from "../RadioGroupBase";
import { ControlGroup } from "./ControlGroup";

test("It renders a label and a helper text", () => {
  const { container, getByText } = render(
    <ControlGroup
      id="cityGroup"
      label="Australia cities"
      helperText="These are just a few"
    >
      <RadioGroupBase name="cities">
        <Radio label="Melbourne" id="mlb" value="mlb" />
        <Radio label="Sydney" id="syd" value="syd" />
        <Radio label="Perth" id="prt" value="prt" />
      </RadioGroupBase>
    </ControlGroup>
  );

  expect(container.querySelector("#cityGroup")?.tagName.toLowerCase()).toBe(
    "fieldset"
  );
  expect(getByText("Australia cities").tagName.toLowerCase()).toBe("legend");
  expect(getByText("These are just a few").tagName.toLowerCase()).toBe("p");
});

test("when it is in error state, the Radio Svgs pick up that state too", () => {
  const { container } = render(
    <ControlGroup
      id="cityGroup"
      label="Australia cities"
      helperText="You have to select at least one city."
      error
    >
      <RadioGroupBase name="cities">
        <Radio label="Melbourne" id="mlb" value="mlb" />
        <Radio label="Sydney" id="syd" value="syd" />
        <Radio label="Perth" id="prt" value="prt" />
      </RadioGroupBase>
    </ControlGroup>
  );

  const [mlbSvg, sydSvg, prtSvg] = Array.from(
    container.getElementsByTagName("svg")
  );

  expect(window.getComputedStyle(mlbSvg).color).toBe("rgb(236, 0, 0)");
  expect(window.getComputedStyle(sydSvg).color).toBe("rgb(236, 0, 0)");
  expect(window.getComputedStyle(prtSvg).color).toBe("rgb(236, 0, 0)");
});

test("when disabled, the Radio inputs become disabled as well", () => {
  const { container } = render(
    <ControlGroup
      id="cityGroup"
      label="Australia cities"
      helperText="You have to select at least one city."
      disabled
    >
      <RadioGroupBase name="cities">
        <Radio label="Melbourne" id="mlb" value="mlb" />
        <Radio label="Sydney" id="syd" value="syd" />
        <Radio label="Perth" id="prt" value="prt" />
      </RadioGroupBase>
    </ControlGroup>
  );

  const [mlb, syd, prt] = Array.from(container.getElementsByTagName("input"));

  expect(mlb).toHaveAttribute("disabled");
  expect(syd).toHaveAttribute("disabled");
  expect(prt).toHaveAttribute("disabled");
});

test("overrides components for root and label", () => {
  const { container, getByText } = render(
    <ControlGroup
      id="cityGroup"
      label="Australia cities"
      helperText="These are just a few"
      groupComponent="div"
      labelComponent="label"
    >
      <RadioGroupBase name="cities">
        <Radio label="Melbourne" id="mlb" value="mlb" />
        <Radio label="Sydney" id="syd" value="syd" />
        <Radio label="Perth" id="prt" value="prt" />
      </RadioGroupBase>
    </ControlGroup>
  );
  expect(container.querySelector("#cityGroup")?.tagName.toLowerCase()).toBe(
    "div"
  );
  expect(getByText("Australia cities").tagName.toLowerCase()).toBe("label");
});

test("does not render label if not provided", () => {
  const { queryByTestId } = render(
    <ControlGroup
      id="cityGroup"
      helperText="These are just a few"
      groupComponent="div"
      labelComponent="label"
    >
      <RadioGroupBase name="cities">
        <Radio label="Melbourne" id="mlb" value="mlb" />
        <Radio label="Sydney" id="syd" value="syd" />
        <Radio label="Perth" id="prt" value="prt" />
      </RadioGroupBase>
    </ControlGroup>
  );

  expect(queryByTestId("cityGroup-label")).toBeNull();
});

test("does not render helper text if not provided", () => {
  const { queryByTestId } = render(
    <ControlGroup
      id="cityGroup"
      label="Australia cities"
      groupComponent="div"
      labelComponent="label"
    >
      <RadioGroupBase name="cities">
        <Radio label="Melbourne" id="mlb" value="mlb" />
        <Radio label="Sydney" id="syd" value="syd" />
        <Radio label="Perth" id="prt" value="prt" />
      </RadioGroupBase>
    </ControlGroup>
  );

  expect(queryByTestId("cityGroup-helperText")).toBeNull();
});
