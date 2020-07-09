/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Inline, InlineProps, Placeholder } from "..";

export const docs: ComponentDocs<InlineProps> = {
  category: "Layout",
  componentName: "Inline",
  description:
    "Renders content horizontally with consistent spacing between all items, spanning multiple lines if needed.",
  propDescriptions: {
    alignX: "This is a responsive prop which aligns the children horizontally.",
    alignY: "This is a responsive prop which aligns the children vertically.",
    collapseBelow:
      "Switch from horizontal layout to vertical below the selected breakpoint.",
    space:
      "The responsive prop T-shirt sized space between all items, spanning multiple lines if needed.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <Inline space="small">
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
        </Inline>
      ),
    },
    additional: [
      {
        label: "Responsive space at mobile and desktop, ['xxsmall', 'medium']",
        Code: () => (
          <Inline space={["xxsmall", "medium"]}>
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>
        ),
      },
      {
        label: "Align horizontally to center",
        Code: () => (
          <Inline space="small" alignX="center">
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>
        ),
      },
      {
        label: "Align horizontally to right",
        Code: () => (
          <Inline space="small" alignX="right">
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>
        ),
      },
      {
        label:
          "Responsive alignment (center on mobile, left from desktop upwards)",
        Code: () => (
          <Inline space="small" alignX={["center", "left"]}>
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>
        ),
      },
      {
        label: "Align vertically",
        Code: () => (
          <Inline space="small" alignY="center">
            <Placeholder width={48} height={40} />
            <Placeholder width={48} height={100} />
            <Placeholder width={48} height={60} />
          </Inline>
        ),
      },
      {
        label: "Collapse below desktop",
        Code: () => (
          <Inline space="small" collapseBelow="lg">
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>
        ),
      },
      {
        label:
          'Collapse below desktop with responsive space ( "xxsmall" on mobile, "large" on desktop)',
        Code: () => (
          <Inline space={["xxsmall", "large"]} collapseBelow="lg">
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>
        ),
      },
      {
        label: "Collapse below desktop with center alignment",
        Code: () => (
          <Inline space="small" collapseBelow="lg" alignX="center">
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>
        ),
      },
    ],
  },
  snippets: [],
};
