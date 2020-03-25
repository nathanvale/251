/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Radio } from "../Radio/Radio";
import { RadioGroupBase, RadioGroupBaseProps } from "./RadioGroupBase";

export const getRadioGroupDesc = (name: string) =>
  [
    `This ${
      name === "RafioGroupBase" ? "atomic" : ""
    } component is the container around Radio buttons.`,
    `To have a functioning group of radio buttons it is Mandatory`,
    `to wrap them via a ${name}.`,
    `<p>Each Radio must provide a unique`,
    `value prop. Then via the <code>value</code> and <code>onChange</code> props of ${name},`,
    `one can set or get the value of the current selected Radio button.`,
    `<p>If <code>value</code> is passed in the component becomes controlled.`,
    `If <code>value</code> is <conde>undefined</conde>, it acts as an uncontrolled value and changes the selected Radio button`,
    `through user interactions with them automatically.`,
    `<p>In case of <strong>uncontrolled</strong> ${name}`,
    `use <code>defaultValue</code> prop to pass in the initial selected value.`,
  ].join(" ");

export const getRadioGroupPropsDesc = (name: string) => ({
  defaultValue: `If ${name} is uncontrolled, use this prop to set the initial selected Radio`,
  id: `The unique id of the ${name}, required for accessibility. If not provided will be set to the value of the "name" prop.`,
  name: "The name to refer to the value of this control in the form.",
  onChange: [
    `Is called every time the selected Radio is changed.`,
    `To read the new value, use either "event.target.value" or "value" (the 2nd argument).`,
  ].join(" "),
  value: `If passed in, make ${name} a controlled component. It will cause the corresponding Radio to be selected`,
});

export const docs: ComponentDocs<RadioGroupBaseProps> = {
  category: "Internal",
  componentName: "RadioGroupBase",
  description: getRadioGroupDesc("RadioGroupBase"),
  propDescriptions: getRadioGroupPropsDesc("RadioGroupBase"),
  migrationGuide: false,
  examples: [
    {
      label: "Uncontrolled, without initial radio set",
      description: "No radio is initially set",
      Code: () => (
        <RadioGroupBase name="cities">
          <Radio label="Melbourne" id="mlb" value="mlb" />
          <Radio label="Sydney" id="syd" value="syd" />
          <Radio label="Perth" id="prt" value="prt" />
        </RadioGroupBase>
      ),
    },
    {
      label: "Uncontrolled with an initial value",
      description: "Initial value is set via defaultValue to 'prt'",
      Code: () => (
        <RadioGroupBase name="cities" defaultValue="prt">
          <Radio label="Melbourne" id="mlb" value="mlb" />
          <Radio label="Sydney" id="syd" value="syd" />
          <Radio label="Perth" id="prt" value="prt" />
        </RadioGroupBase>
      ),
    },
  ],
  snippets: [
    {
      label: "Simple example - uncontrolled",
      Code: () => (
        <RadioGroupBase name="cities">
          <Radio label="Melbourne" id="mlb" value="mlb" />
          <Radio label="Sydney" id="syd" value="syd" />
          <Radio label="Perth" id="prt" value="prt" />
        </RadioGroupBase>
      ),
    },
    {
      label: "With initial value - uncontrolled",
      Code: () => (
        <RadioGroupBase name="cities" defaultValue="syd">
          <Radio label="Melbourne" id="mlb" value="mlb" />
          <Radio label="Sydney" id="syd" value="syd" />
          <Radio label="Perth" id="prt" value="prt" />
        </RadioGroupBase>
      ),
    },
  ],
};
