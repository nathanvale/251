/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { getSwitchBaseDocs } from "../_private/components/AbstractSwitch/switch-docs";
import { RadioBase, RadioBaseProps } from "./RadioBase";

export const docs: ComponentDocs<RadioBaseProps> = {
  category: "Interaction",
  componentName: "RadioBase",
  description: [
    "This is a basic radio component without any labels or helper text.",
    "Use this atomic component to build more complicated components.",
    "The Radio components uses this under the hood.",
  ].join(" "),
  propDescriptions: getSwitchBaseDocs("radio"),
  migrationGuide: false,
  examples: [
    {
      label: "Uncontrolled",
      description: "Simple use case of an uncontrolled radio",
      Code: () => <RadioBase id="tc-radio" />,
    },
    {
      label: "Controlled",
      description: "It becomes controlled when checked prop is provided",
      Code: () => <RadioBase id="tc-radio" checked />,
    },
    {
      label: "Error",
      description: "Turns red when it is in error state and it is not checked",
      Code: () => <RadioBase id="tc-radio" error />,
    },
    {
      label: "Disabled",
      description: "All turn grey when it is disabled",
      Code: () => <RadioBase id="tc-radio" disabled checked />,
    },
  ],
  snippets: [
    {
      label: "Uncontrolled",
      Code: () => <RadioBase id="radio1" />,
    },
  ],
};
