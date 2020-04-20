/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { getSwitchDocs } from "../_private/components/AbstractSwitch/switch-docs";
import { Checkbox, CheckboxProps } from "./Checkbox";

export const docs: ComponentDocs<CheckboxProps> = {
  category: "Interaction",
  componentName: "Checkbox",
  description:
    "This is an accessible Checkbox component. It is uncontrolled by default. But if the `checked` value is provided it becomes controlled",
  propDescriptions: getSwitchDocs("checkbox"),
  migrationGuide: false,
  examples: [
    {
      label: "Uncontrolled",
      description: "Simple use case of an uncontrolled checkbox",
      Code: () => <Checkbox label="Accept Ts&Cs" id="tc-checkbox" />,
    },
    {
      label: "Controlled",
      description: "It becomes controlled when checked prop is provided",
      Code: () => <Checkbox label="Accept Ts&Cs" id="tc-checkbox" checked />,
    },
    {
      label: "Error",
      description: "Only the icon turns red when it is in error state",
      Code: () => <Checkbox label="Accept Ts&Cs" id="tc-checkbox" error />,
    },
    {
      label: "Disabled",
      description: "All turn grey when it is disabled",
      Code: () => (
        <Checkbox label="Accept Ts&Cs" id="tc-checkbox" disabled checked />
      ),
    },
    {
      label: "Showing Helper Text",
      description:
        "One could put a helper text under the label for further details",
      Code: () => (
        <Checkbox
          label="Accept Ts&Cs"
          id="tc-checkbox"
          helperText="Make sure you read our Ts&Cs carefully."
        />
      ),
    },
  ],
  snippets: [
    {
      label: "Uncontrolled",
      Code: () => <Checkbox label="Checkbox 1" id="checkbox1" />,
    },
  ],
};
