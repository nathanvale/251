import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Checkbox } from "../Checkbox/Checkbox";
import { FormControl, FormControlProps } from "./FormControl";

export const docs: ComponentDocs<FormControlProps> = {
  category: "Atomic",
  componentName: "FormControl",
  description: [
    "This is an important atomic component that can be used as a wrapper",
    "to build more complicated for component. Examples of using this component",
    "include wrapping a number of Checkboxes or Radios which need to be grouped.",
    "This component has a context provider that allows its children to check its stats",
    "(such as 'error', 'disabled', ...) and style themselves accordingly.",
    "FormLabel, FormHelperText, Radio and Checkbox automatically respond to",
    "'error' and 'disabled' states of this wrapper component if provided.",
    "Notice that the helperTexts for each Radio and Checkbox are NOT changing",
    "colour to if the wrapping FormControl is in error state. This is deliberate and according to our style-guide",
  ].join("\n"),
  propDescriptions: {
    id: "The unique id of the component, required to accessibility",
    children: [
      "Any elements, however with the exception of Radios and Checkboxes",
      "this component should only have 1 input child",
    ].join(" "),
    component: ["The html element type to be used under the hood."].join(" "),
    disabled: [
      "If true will set the state of its input children to disabled as well.",
      "use this to set the state of a group of checkboxes or Radios.",
    ].join(" "),
    fullWidth: [
      "If true the FormControl will take up the full width of its container. This value is also passed down to",
      "the children of FormControl via FormStateContext.",
    ].join(" "),
    error: [
      "If true will set the state of its input children to error as well.",
      "use this to set the state of a group of checkboxes or Radios.",
    ].join(" "),
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <FormControl>This is a fieldset</FormControl>,
    },
    additional: [
      {
        label: "Custom component",
        description: ["Render a div element"].join(" "),
        Code: () => <FormControl component="div">This is a div</FormControl>,
      },
      {
        label: "Complex use-case, error state",
        description: [
          "Checkboxes under the hood respond to 'error' states of this component",
        ].join(" "),
        Code: () => (
          <FormControl error>
            <Checkbox id="chk1" label="Check 1" helperText="Some description" />
            <Checkbox id="chk2" label="Check 2" />
          </FormControl>
        ),
      },
      {
        label: "Complex use-case, disabled state",
        description: [
          "Checkboxes under the hood respond to 'disabled' states of this component",
        ].join(" "),
        Code: () => (
          <FormControl disabled>
            <Checkbox id="chk1" label="Check 1" />
            <Checkbox id="chk2" label="Check 2" />
          </FormControl>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Set error state of children",
      Code: () => (
        <FormControl error>
          <Checkbox id="chk1" label="Check 1" helperText="some description" />
          <Checkbox id="chk2" label="Check 2" />
        </FormControl>
      ),
    },
  ],
};
