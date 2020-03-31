/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Box, StackProps } from "../";

export const docs: ComponentDocs<StackProps> = {
  category: "Layout",
  componentName: "Box",
  variant: "list",
  description:
    "Box is our design systems most low-level atomic layout component. If you’re unable to satisfy a design using the built-in set of higher level components, ODS also provides consumers with the Box component that provides direct access to the themed atomic styles that ODS uses internally. A nice side-effect of this approach is that your application will be reusing existing CSS rules rather than generating new ones, keeping your bundle size to a minimum.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      Code: () => <Box padding="xxlarge" backgroundColor="secondary" />,
    },
    {
      Code: () => (
        <Box
          padding="xxlarge"
          backgroundColor="secondary"
          textAlign={["center", "right"]}
        >
          Text
        </Box>
      ),
    },
    {
      Code: () => <Box padding="large" backgroundColor="info" />,
    },
    {
      Code: () => (
        <Box padding="large" margin="xxlarge" backgroundColor="secondary" />
      ),
    },
  ],
  snippets: [],
};
