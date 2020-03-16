/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { FormHelperText, FormHelperTextProps } from "./FormHelperText";

export const docs: ComponentDocs<FormHelperTextProps> = {
  category: "Content",
  componentName: "FormHelperText",
  description:
    "This is a low level and atomic component used to show descriptive helper text under form components.",
  propDescriptions: {
    id: "The unique id of the component, required to accessibility",
  },
  migrationGuide: false,
  examples: [
    {
      label: "Simple use case",
      description: [
        "Simple use case of a FormHelperText. ",
        "The id is mandatory as it has to be pointed to by the corresponding input component",
      ].join(" "),
      Code: () => (
        <FormHelperText id="controlHelperText">
          This is a helper text
        </FormHelperText>
      ),
    },
    {
      label: "data-id",
      description:
        "If data-id is provided, it will be set on the component, otherwise it will be set to 'helperText'.",
      Code: () => (
        <FormHelperText id="controlHelperText">
          This is a helper text
        </FormHelperText>
      ),
    },
  ],
  snippets: [
    {
      label: "Basic",
      Code: () => (
        <FormHelperText id="controlHelperText" data-id="controlHelperText">
          This is a helper text
        </FormHelperText>
      ),
    },
  ],
};
