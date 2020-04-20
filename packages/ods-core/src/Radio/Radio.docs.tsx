/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { getSwitchDocs } from "../_private/components/AbstractSwitch/switch-docs";
import { Radio, RadioProps } from "./Radio";

export const docs: ComponentDocs<RadioProps> = {
  category: "Interaction",
  componentName: "Radio",
  description:
    "This is an accessible Radio component. It is uncontrolled by default. But if the `checked` value is provided it becomes controlled",
  propDescriptions: getSwitchDocs("radio"),
  migrationGuide: false,
  examples: [
    {
      label: "Uncontrolled",
      description: "Simple use case of an uncontrolled radio",
      Code: () => <Radio label="Accept Ts&Cs" id="tc-radio" />,
    },
    {
      label: "Controlled",
      description: "It becomes controlled when checked prop is provided",
      Code: () => <Radio label="Accept Ts&Cs" id="tc-radio" checked />,
    },
    {
      label: "Error",
      description: "Only the icon turns red when it is in error state",
      Code: () => <Radio label="Accept Ts&Cs" id="tc-radio" error />,
    },
    {
      label: "Disabled",
      description: "All turn grey when it is disabled",
      Code: () => <Radio label="Accept Ts&Cs" id="tc-radio" disabled checked />,
    },
    {
      label: "Showing Helper Text",
      description:
        "One could put a helper text under the label for further details",
      Code: () => (
        <Radio
          label="Accept Ts&Cs"
          id="tc-radio"
          helperText="Make sure you read our Ts&Cs carefully."
        />
      ),
    },
  ],
  snippets: [
    {
      label: "Uncontrolled",
      Code: () => <Radio label="Checkbox 1" id="radio1" />,
    },
  ],
};
