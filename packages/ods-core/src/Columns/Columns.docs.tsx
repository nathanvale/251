/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Placeholder, Columns, Column, ColumnsProps } from "..";

export const docs: ComponentDocs<ColumnsProps> = {
  category: "Layout",
  componentName: "Columns",
  description:
    "Columns is a low-level atomic layout component. Its main concerns are laying out columns in a 12 grid layout and responsively stacking them at a set breakpoint. Open the examples in Playroom to see the responsive behaviour of this component.",
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
    default: {},
    additional: [
      {
        label: "No space",
        Code: () => (
          <Columns space="none">
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={60} />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Custom space, small",
        Code: () => (
          <Columns space="small">
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={60} />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Responsively Collapsing Columns to a Stack",
        description:
          "Columns can collapse from a horizontal layout to a vertical stack by passing in a 'collapseBelow' breakpoint. In this example all columns below the 'sm' breakpoint will collapse to a stack. Open in Playroom to see the responsive behaviour of this example.",
        Code: () => (
          <Columns space="small" collapseBelow="sm">
            <Column>
              <Placeholder />
            </Column>
            <Column>
              <Placeholder />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Responsively Collapsing Columns Below Desktop",
        description:
          "In this exmaple columns collapse to a stack below the desktop breakpoint. Open in Playroom to see the responsive behaviour of this example.",
        Code: () => (
          <Columns space="small" collapseBelow="lg">
            <Column>
              <Placeholder />
            </Column>
            <Column>
              <Placeholder />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Responsive Space on Mobile and Desktop Breakpoints",
        description:
          "Distributed space can be controlled responsively by passing in an array of exactly two tshirt sizes - one for mobile and one for desktop. Open in Playroom to see the responsive behaviour of this example.",
        Code: () => (
          <Columns space={["small", "xxxlarge"]}>
            <Column>
              <Placeholder />
            </Column>
            <Column>
              <Placeholder />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Responsive Space Across All Five Breakpoints",
        description:
          "For more granular control across all 5 breakpoints, ‘xs’, ‘sm’,  ‘md’, ‘lg’ and ‘xl’, distributed space can be controlled responsively by passing in an object with breakpoints as keys and tshirt sizes as values. Open in Playroom to see the responsive behaviour of this example.",
        Code: () => (
          <Columns
            space={{
              xs: "none",
              sm: "small",
              md: "medium",
              lg: "large",
              xl: "xxlarge",
            }}
          >
            <Column>
              <Placeholder />
            </Column>
            <Column>
              <Placeholder />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Vertical alignment to center",
        description:
          "Use alignY to align the child Column components top, center (defalut) or bottom",
        Code: () => (
          <Columns space="small" alignY="center">
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={100} />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Vertical alignment to bottom",
        description:
          "Use alignY to align the child Column components top, center (defalut) or bottom",
        Code: () => (
          <Columns space="small" alignY="bottom">
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={100} />
            </Column>
          </Columns>
        ),
      },
      {
        label:
          "Responsive alignment ( top on mobile, center on desktop upwards)'",
        Code: () => (
          <Columns space="small" alignY={["top", "center"]}>
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={100} />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Horizontal alignment",
        Code: () => (
          <Columns alignX={["center", "right"]} space="small">
            <Column width="content">
              <Placeholder label="Content" />
            </Column>
            <Column width="1/2">&nbsp;</Column>
            <Column width="content">
              <Placeholder label="Content" />
            </Column>
          </Columns>
        ),
      },
    ],
  },
  snippets: [],
};
