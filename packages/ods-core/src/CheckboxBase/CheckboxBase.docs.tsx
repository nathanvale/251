/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { getSwitchBaseDocs } from "../_private/components/AbstractSwitch/switch-docs";
import { CheckboxBase, CheckboxBaseProps } from "./CheckboxBase";

export const docs: ComponentDocs<CheckboxBaseProps> = {
  category: "Internal",
  componentName: "CheckboxBase",
  description: [
    "This is a basic checkbox component without any labels or helper text.",
    "Use this atomic component to build more complicated components.",
    "The Checkbox components uses this under the hood.",
  ].join(" "),
  propDescriptions: getSwitchBaseDocs("checkbox"),
  migrationGuide: false,
  examples: [
    {
      label: "Uncontrolled",
      description: "Simple use case of an uncontrolled checkbox",
      Code: () => <CheckboxBase id="tc-checkbox" />,
    },
    {
      label: "Controlled",
      description: "It becomes controlled when checked prop is provided",
      Code: () => <CheckboxBase id="tc-checkbox" checked />,
    },
    {
      label: "Error",
      description: "Turns red when it is in error state and it is not checked",
      Code: () => <CheckboxBase id="tc-checkbox" error />,
    },
    {
      label: "Disabled",
      description: "All turn grey when it is disabled",
      Code: () => <CheckboxBase id="tc-checkbox" disabled checked />,
    },
  ],
  snippets: [
    {
      label: "Uncontrolled",
      Code: () => <CheckboxBase id="checkbox1" />,
    },
  ],
};
