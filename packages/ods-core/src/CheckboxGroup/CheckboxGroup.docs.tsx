/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Checkbox } from "../Checkbox/Checkbox";
import { getCGPropsDocs } from "../ControlGroup/ControlGroup.docs";
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup";

export const docs: ComponentDocs<CheckboxGroupProps> = {
  category: "Form",
  componentName: "ControlGroup",
  description: [
    `Use this component to group a number of Checkboxes.`,
    `The component will also provide a label and a helperText (that could be used to show group level`,
    `error messages or detailed descriptions).`,
  ].join(" "),
  propDescriptions: getCGPropsDocs("CheckboxGroup"),
  migrationGuide: false,
  examples: [
    {
      label: "Simple example",
      description:
        "Automatically wraps the children in a fieldset and provide a legend.",
      Code: () => (
        <CheckboxGroup
          id="cityGroup"
          label="Australia cities"
          helperText="You have to select at least one city."
        >
          <Checkbox label="Melbourne" id="mlb" />
          <Checkbox label="Sydney" id="syd" />
          <Checkbox label="Perth" id="prt" />
        </CheckboxGroup>
      ),
    },
    {
      label: "In error state",
      description: "All children will also be in error state",
      Code: () => (
        <CheckboxGroup
          id="cityGroup"
          label="Australia cities"
          helperText="You have to select at least one city."
          error
        >
          <Checkbox label="Melbourne" id="mlb" />
          <Checkbox label="Sydney" id="syd" />
          <Checkbox label="Perth" id="prt" />
        </CheckboxGroup>
      ),
    },
    {
      label: "In disabled state",
      description: "All children will also be in disabled state.",
      Code: () => (
        <CheckboxGroup
          id="cityGroup"
          label="Australia cities:"
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
        </CheckboxGroup>
      ),
    },
  ],
  snippets: [
    {
      label: "Simple example",
      Code: () => (
        <CheckboxGroup
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
        </CheckboxGroup>
      ),
    },
  ],
};
