/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Text, TextProps } from "..";

export const docs: ComponentDocs<TextProps> = {
  category: "Experimental",
  componentName: "Text",
  description:
    "This component is experimental and is currently only used internally by these design system docs. It will eventually be replaced with a MUI implementation.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      Code: () => <Text>Content</Text>,
    },
  ],
  snippets: [],
};
