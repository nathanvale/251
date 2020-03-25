/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Radio } from "../Radio/Radio";
import { RadioGroupBase } from "../RadioGroupBase/RadioGroupBase";
import { Checkbox } from "../Checkbox/Checkbox";
import { ControlGroup, ControlGroupProps } from "./ControlGroup";

export const getCGPropsDocs = (name: string) => ({
  groupComponent:
    "Define the element to be rendered for the group. The default is a 'fieldset'.",
  helperText:
    "Provide further details or group-level error messages via this prop.",
  id: `The unique id of the ${name}, required for accessibility.`,
  label: `The label (title) to be shown for the group.`,
  labelComponent:
    "The element to render the label with. The default is a 'legend'.",
  error: [
    `The error state of ${name}. When this is set,`,
    "all the control children also turn to error.",
  ].join(" "),
  disabled: [
    `The disabled state of ${name}. When this is set,`,
    "all the control children also turn to disabled state.",
  ].join(" "),
});

export const docs: ComponentDocs<ControlGroupProps> = {
  category: "Internal",
  componentName: "ControlGroup",
  description: [
    `This atomic component is a container that can be used to group for components, such as multiple checkboxes or radios.`,
    `The component has a context which provides control states for its children, e.g. disabled, error, etc.`,
    `When a state (such as error) is provided for this component all the children also pick up that state.`,
    `As this is a low-level component, for grouping checkboxes/radios use CheckboxGroup/RadioGroup component.`,
    `They are built on top of this component.`,
    `The component also provides a label for the group and a helperText (which can be used to show details or error messages).`,
  ].join(" "),
  propDescriptions: getCGPropsDocs("ControlGroup"),
  migrationGuide: false,
  examples: [
    {
      label: "Simple example",
      description:
        "Automatically wraps the children in a fieldset and provide a legend.",
      Code: () => (
        <ControlGroup
          id="cityGroup"
          label="Australia cities"
          helperText="You have to select at least one city."
        >
          <RadioGroupBase name="cities">
            <Radio label="Melbourne" id="mlb" value="mlb" />
            <Radio label="Sydney" id="syd" value="syd" />
            <Radio label="Perth" id="prt" value="prt" />
          </RadioGroupBase>
        </ControlGroup>
      ),
    },
    {
      label: "In error state",
      description: "All children will also be in error state",
      Code: () => (
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
      ),
    },
    {
      label: "In disabled state",
      description: "All children will also be in disabled state.",
      Code: () => (
        <ControlGroup
          id="cityGroup"
          label="Australia cities"
          helperText="You have to select at least one city."
          disabled
        >
          <Checkbox label="Melbourne" id="mlb" />
          <Checkbox
            label="Sydney"
            id="syd"
            helperText="The heart of Australia"
          />
          <Checkbox label="Perth" id="prt" />
        </ControlGroup>
      ),
    },
  ],
  snippets: [
    {
      label: "Simple example",
      Code: () => (
        <ControlGroup
          id="cityGroup"
          label="Australia cities"
          helperText="You have to select at least one city."
        >
          <Checkbox label="Melbourne" id="mlb" />
          <Checkbox
            label="Sydney"
            id="syd"
            helperText="The heart of Australia"
          />
        </ControlGroup>
      ),
    },
  ],
};
