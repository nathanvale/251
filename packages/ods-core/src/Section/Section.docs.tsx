/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Section, SectionProps, Placeholder } from "..";

export const docs: ComponentDocs<SectionProps> = {
  category: "Layout",
  componentName: "Section",
  description:
    "Section is a low-level atomic layout component. Its main concerns are horizontally centering and responsively setting full width or max-widths across 5 breakpoints. Before using this component please consider other section pattern components such as ContentSection or CardStackSection. Open the examples in Playroom to see the responsive behaviour of this component.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      noSection: true,
      description: `By default <Section/> has a fluidity of "off". A max-width is applied at every media query breakpoint except for mobile. At the mobile breakpoint, the width is fluid, 100%.`,
      label: "Default Example",
      Code: () => (
        <Section>
          <Placeholder />
        </Section>
      ),
    },
    {
      noSection: true,
      label: "Background color",
      Code: () => (
        <Section backgroundColor="white">
          <Placeholder />
        </Section>
      ),
    },
    {
      noSection: true,
      label: "Fluidity up to 1140px wide",
      description: `When <Section/> has a fluidity of "max-width-at-xl". Its width is 100% of its container with a restriction of 1140px wide.`,
      Code: () => (
        <Section fluidity="max-width-at-xl">
          <Placeholder />
        </Section>
      ),
    },
    {
      noSection: true,
      label: "Full Width Fluidity",
      description: `A fluidity of "full-width" enables a width of 100% of its container with no restrictions at any breakpoint.`,
      Code: () => (
        <Section fluidity="full-width">
          <Placeholder />
        </Section>
      ),
    },
    {
      noSection: true,
      label: "Hiding Gutters",
      description: `By default, there is a gutter or left and right padding. In cases where you want your content to extend to the boundaries of your parent container pass in "hideGutter={true}".`,
      Code: () => (
        <Section hideGutter fluidity="full-width">
          <Placeholder />
        </Section>
      ),
    },
    {
      noSection: true,
      stretch: true,
      label: "Vertically Stretching",
      description: `In situations where you would like to vertically stretch Section to its parent height pass in "stretchY."`,
      Code: () => (
        <Section stretchY>
          <Placeholder height="100%" />
        </Section>
      ),
    },
  ],
  snippets: [],
};
