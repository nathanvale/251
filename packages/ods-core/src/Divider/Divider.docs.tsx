/* eslint-disable react/display-name */
import React, { ReactNode } from "react";
import { ComponentDocs } from "../../../../docs/src/types";
import { Divider, DividerProps, Section, Box } from "..";

const Container = ({ children }: { children: ReactNode }) => (
  <Box width="full" backgroundColor="white" paddingY={["xlarge", "xxlarge"]}>
    <Section>{children}</Section>
  </Box>
);

export const docs: ComponentDocs<DividerProps> = {
  category: "Layout",
  componentName: "Divider",
  description: "Dividers are useful for separating content.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      Container,
      Code: () => <Divider />,
    },
  ],
};
