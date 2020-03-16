/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Box } from "../Box/Box";
import { CheckboxBase } from "../CheckboxBase/CheckboxBase";
import { FormControlLabel, FormControlLabelProps } from "./FormControlLabel";

export const docs: ComponentDocs<FormControlLabelProps> = {
  category: "Content",
  componentName: "FormControlLabel",
  description:
    "This is a low level and atomic component used to provide a label for interactive form components.",
  propDescriptions: {
    id: "The unique id of the component, required to accessibility",
    label: [
      "This will be label to show. In most cases this is just a string.",
      "But it could be any ReactNode for further customisations.",
    ].join(" "),
    control: ["The control component for which this label is shown."].join(" "),
  },
  migrationGuide: false,
  examples: [
    {
      label: "Simple case",
      description: ["A checkbox with a string label"].join(" "),
      Code: () => (
        <FormControlLabel
          label="Simple table"
          control={<CheckboxBase id="myCheckbox" />}
        />
      ),
    },
    {
      label: "Checkbox",
      description: ["Rendering a more complicated label."].join(" "),
      Code: () => (
        <FormControlLabel
          label={
            <Box style={{ fontWeight: "bold", color: "red" }}>
              Red bold label
            </Box>
          }
          control={<CheckboxBase id="myCheckbox" />}
        />
      ),
    },
  ],
  snippets: [
    {
      label: "Basic",
      Code: () => (
        <FormControlLabel
          label="Simple table"
          control={<CheckboxBase id="myCheckbox" />}
        />
      ),
    },
  ],
};
