/* eslint-disable react/display-name */
import React, { ReactNode } from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Box, Section, Stack, StackProps, Placeholder } from "../";

const Container = ({ children }: { children: ReactNode }) => (
  <Box width="full" backgroundColor="white" paddingY={["xlarge", "xxlarge"]}>
    <Section>{children}</Section>
  </Box>
);

export const docs: ComponentDocs<StackProps> = {
  category: "Layout",
  componentName: "Stack",
  description:
    "Stack is a low-level atomic layout component. Its main concerns are vertically stacking and evenly distributing white space between its children. Open the examples in Playroom to see the responsive behaviour of this component.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      label: "Default Behaviour",
      description:
        "By default <Stack/> vertically stacks siblings without any space between them.",
      Code: () => (
        <Stack>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Distributed Space",
      description: `In order to distribute white space evenly between components pass in "space" with a tshirt size.`,
      Code: () => (
        <Stack space="xxlarge">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Responsive Space Across All Five Breakpoints",
      description:
        "For more granular control across all 5 breakpoints, xs, sm, md, lg and xl, distributed space can be controlled responsively by passing in an object with breakpoints as keys and tshirt sizes as values. Open in Playroom to see the responsive behaviour of this example.",
      Code: () => (
        <Stack
          space={{
            xs: "none",
            sm: "small",
            md: "medium",
            lg: "large",
            xl: "xxlarge",
          }}
        >
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Dividers",
      description: `Dividers between distributed children can be made visible when you pass in "dividers" as true. You will notice superfluous dividers if any of Stack's children return null. The recommendation in this case is to manually add your own dividers - by using the Divider component.`,
      Container,
      Code: () => (
        <Stack space="small" dividers>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Horizontal Alignment",
      description:
        "With alignX one can decide to align the children of a Stack component, to left, right, center or stretch (default).",
      Container,
      Code: () => (
        <Stack space="small" dividers alignX="center">
          <Placeholder shape="round" width="120px" />
          <Placeholder shape="round" width="120px" />
          <Placeholder shape="round" width="120px" />
        </Stack>
      ),
    },
  ],
  snippets: [
    {
      label: "XXSmall Space",
      Code: () => (
        <Stack space="xxsmall">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "XSmall Space",
      Code: () => (
        <Stack space="xsmall">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Small Space",
      Code: () => (
        <Stack space="small">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Medium Space",
      Code: () => (
        <Stack space="medium">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Large Space",
      Code: () => (
        <Stack space="large">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Responsive Space 1",
      Code: () => (
        <Stack space={["small", "xxxlarge"]}>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      label: "Responsive Space 2",
      Code: () => (
        <Stack
          space={{
            xs: "none",
            sm: "small",
            md: "medium",
            lg: "large",
            xl: "xxxlarge",
          }}
        >
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
  ],
};
