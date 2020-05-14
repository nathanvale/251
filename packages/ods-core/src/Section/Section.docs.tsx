/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Section, SectionProps, Placeholder, Stack, Box } from "..";

export const docs: ComponentDocs<SectionProps> = {
  category: "Layout",
  componentName: "Section",
  description:
    "Section is a low-level atomic layout component. Its main concerns are horizontally centering and responsively setting full width or max-widths across 5 breakpoints. This component should be at your root and not be nested.",
  propDescriptions: {},
  migrationGuide: false,
  examples: {
    default: {
      noCard: true,
      Code: () => (
        <Section>
          <Placeholder />
        </Section>
      ),
    },
    additional: [
      {
        noCard: true,
        label: "Setting Background Color",
        Code: () => (
          <Section backgroundColor="transparent">
            <Placeholder />
          </Section>
        ),
      },
      {
        noCard: true,
        label: "Fluidity up to 1140px Wide",
        description: `When <Section/> has a fluidity of "max-width-at-xl". Its width is 100% of its container with a restriction of 1140px wide.`,
        Code: () => (
          <Section fluidity="max-width-at-xl" backgroundColor="transparent">
            <Placeholder />
          </Section>
        ),
      },
      {
        noCard: true,
        label: "Full Width Fluidity",
        description: `A fluidity of "full-width" enables a width of 100% of its container with no restrictions at any breakpoint.`,
        Code: () => (
          <Section fluidity="full-width" backgroundColor="transparent">
            <Placeholder />
          </Section>
        ),
      },
      {
        noCard: true,
        label: "Hiding Gutters",
        description: `By default, there is a gutter or left and right padding. In cases where you want your content to extend to the boundaries of your parent container pass in "hideGutter={true}".`,
        Code: () => (
          <Section
            hideGutter
            fluidity="full-width"
            backgroundColor="transparent"
          >
            <Placeholder />
          </Section>
        ),
      },
      {
        noCard: true,
        label: "Hiding Gutters on Mobile and Desktop Breakpoints",
        description: `Hiding gutters cans be controlled responsively by passing in an array of boolean values (true or false) - one for mobile and one for desktop. Open in Playroom to see the responsive behaviour of this example.`,
        Code: () => (
          <Section
            hideGutter={[true, false]}
            fluidity="full-width"
            backgroundColor="transparent"
          >
            <Placeholder />
          </Section>
        ),
      },
      {
        noCard: true,
        label: "Hiding Gutters Across All Five Breakpoints",
        description: `Hiding gutters cans be controlled responsively across all 5 breakpoints, ‘xs’, ‘sm’,  ‘md’, ‘lg’ and ‘xl’ by passing in an object with breakpoints as keys and booleans (true or false) as values. Open in Playroom to see the responsive behaviour of this example.`,
        Code: () => (
          <Section
            hideGutter={{
              xs: false,
              sm: true,
              md: false,
              lg: true,
              xl: false,
            }}
            fluidity="full-width"
            backgroundColor="transparent"
          >
            <Placeholder />
          </Section>
        ),
      },
      {
        noCard: true,
        stretch: true,
        label: "Vertically Stretching",
        description: `In situations where you would like to vertically stretch Section to its parent height pass in "stretchY."`,
        Code: () => (
          <Box style={{ height: "700px" }}>
            <Section stretchY backgroundColor="transparent">
              <Placeholder height="100%" />
            </Section>
          </Box>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => (
        <Section>
          <Placeholder />
        </Section>
      ),
    },
    {
      label: "Stacked",
      Code: () => (
        <Stack space="xsmall">
          <Section>
            <Placeholder />
          </Section>
          <Section>
            <Placeholder />
          </Section>
          <Section>
            <Placeholder />
          </Section>
        </Stack>
      ),
    },
  ],
};
