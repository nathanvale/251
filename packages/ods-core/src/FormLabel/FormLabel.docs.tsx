/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { FormLabel, FormLabelProps } from "./FormLabel";

export const docs: ComponentDocs<FormLabelProps> = {
  category: "Atomic",
  componentName: "FormLabel",
  description:
    "This is a low level and atomic component used to provide a label for interactive form components.",
  propDescriptions: {
    id: "The unique id of the component, required to accessibility",
    children: ["The text to show for the label."].join(" "),
    component: ["The html element type to be used under the hood."].join(" "),
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <FormLabel>This is a label</FormLabel>,
    },
    additional: [
      {
        label: "Custom component",
        description: ["Label"].join(" "),
        Code: () => <FormLabel component="legend">This is a legend</FormLabel>,
      },
    ],
  },
  snippets: [
    {
      label: "Simple",
      Code: () => <FormLabel>Some label</FormLabel>,
    },
  ],
};
