import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Checkbox } from "../Checkbox";
import { getCGPropsDocs } from "../ControlGroup/ControlGroup.docs";
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup";

export const docs: ComponentDocs<CheckboxGroupProps> = {
  category: "Interaction",
  componentName: "ControlGroup",
  description: [
    `Use this component to group a number of Checkboxes.`,
    `The component will also provide a label and a helperText (that could be used to show group level`,
    `error messages or detailed descriptions).`,
  ].join(" "),
  propDescriptions: getCGPropsDocs("CheckboxGroup"),
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <CheckboxGroup id="cityGroup">
          <Checkbox label="Melbourne" id="mlb" />
          <Checkbox label="Sydney" id="syd" />
          <Checkbox label="Perth" id="prt" />
        </CheckboxGroup>
      ),
    },
    additional: [
      {
        label: "Label and helper text",
        Code: () => (
          <CheckboxGroup
            id="cityGroup"
            label="Australian cities"
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
            label="Australian cities"
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
            label="Australian cities:"
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
  },
  snippets: [
    {
      label: "Simple example",
      Code: () => (
        <CheckboxGroup
          id="cityGroup"
          label="Australian cities"
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
