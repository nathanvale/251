/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { FormHelperText, FormHelperTextProps } from "./FormHelperText";

export const docs: ComponentDocs<FormHelperTextProps> = {
  category: "Atomic",
  componentName: "FormHelperText",
  description:
    "This is a low level and atomic component used to show descriptive helper text under form components.",
  propDescriptions: {
    id: "The unique id of the component, required to accessibility",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <FormHelperText id="controlHelperText">
          This is a helper text
        </FormHelperText>
      ),
    },
    additional: [
      {
        label: "data-id",
        description:
          "If data-id is provided, it will be set on the component, otherwise it will be set to 'form-helper-text'.",
        Code: () => (
          <FormHelperText id="controlHelperText">
            This is a helper text
          </FormHelperText>
        ),
      },
    ],
  },
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
