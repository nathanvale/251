/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Keyboard, KeyboardProps } from "./Keyboard";

export const docs: ComponentDocs<KeyboardProps> = {
  category: "Experimental",
  componentName: "Keyboard",
  description: "",
  propDescriptions: {},
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <Keyboard />,
    },
    additional: [],
  },
  snippets: [],
};
