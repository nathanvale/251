/* eslint-disable react/display-name */
import React from "react";
import { Section } from "@origin-digital/ods-core";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Checkbox, CheckboxProps } from "..";

export const docs: ComponentDocs<CheckboxProps> = {
  category: "Experimental",
  componentName: "Checkbox",
  description: "",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      Code: () => (
        <Section>
          <Checkbox
            name="checkbox"
            label="checkbox"
            helperText="helperText"
            onChange={() => {}}
            checked={true}
            error={false}
          />
        </Section>
      ),
    },
  ],
  snippets: [],
};
