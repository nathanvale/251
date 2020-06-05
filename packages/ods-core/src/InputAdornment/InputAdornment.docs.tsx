/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { InputAdornment, InputAdornmentProps } from "./InputAdornment";

export const docs: ComponentDocs<InputAdornmentProps> = {
  category: "Atomic",
  componentName: "InputAdornment",
  description: [
    "Use this component whenever you want to pass custom adornments to a TextFieldBase component.",
    "InputAdornment takes care of spaces around the children so that they look nicely inside the TextFieldBase.",
  ].join("\n"),
  propDescriptions: {
    id: "The unique id of the component.",
    children: ["Any elements, most commonly be an Icon."].join(" "),
    component: ["The html element type to be used under the hood."].join(" "),
    disabled: [
      "If true will set the state of its input children to disabled.",
    ].join(" "),
    error: ["If true will set the state of its children to error."].join(" "),
    position: [
      "The position this adornment should appear relative to the `Input`",
    ].join(" "),
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <InputAdornment position="start">This is a fieldset</InputAdornment>
      ),
    },
    additional: [
      {
        label: "End adornment",
        description: [
          "Use this when the adornment is expected to appear at the end of the input",
        ].join(" "),
        Code: () => (
          <InputAdornment position="end">Put your icon here</InputAdornment>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Start",
      Code: () => (
        <InputAdornment position="start">Put your icon here</InputAdornment>
      ),
    },
  ],
};
