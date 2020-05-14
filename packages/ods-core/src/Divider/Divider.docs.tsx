/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Divider, DividerProps } from "..";

export const docs: ComponentDocs<DividerProps> = {
  category: "Layout",
  componentName: "Divider",
  description: "Dividers are useful for separating content.",
  propDescriptions: {},
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <Divider />,
    },
  },
  snippets: [],
};
