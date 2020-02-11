/* eslint-disable react/display-name */
import React from "react";
import {ComponentDocs} from "../../../../docs/src/types";
import {Placeholder, Columns, Column, ColumnsProps} from "..";

export const docs: ComponentDocs<ColumnsProps> = {
  category: "Layout",
  componentName: "Columns",
  description:
    "Columns is a low-level atomic layout component. Its main concerns are laying out columns in a 12 grid layout and responsively stacking them at a set breakpoint. Open the examples in Playroom to see the responsive behaviour of this component.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      label: "Responsively Collapsing Columns to a Stack",
      description:
        "Columns can collapse from a horizontal layout to a vertical stack by passing in a 'collapseBelow' breakpoint. In this example all columns below the 'sm' breakpoint will collapse to a stack. Open in Playroom to see the responsive behaviour of this example.",
      Code: () => (
        <Columns space="small" collapseBelow="sm">
          <Column>
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column>
            <Placeholder backgroundColor="blue" />
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
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column>
            <Placeholder backgroundColor="blue" />
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
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column>
            <Placeholder backgroundColor="blue" />
          </Column>
        </Columns>
      ),
    },
    {
      label: "Responsive Space Across All Five Breakpoints",
      description:
        "For more granular control across all 5 breakpoints, xs, sm, md, lg and xl, distributed space can be controlled responsively by passing in an object with breakpoints as keys and tshirt sizes as values. Open in Playroom to see the responsive behaviour of this example.",
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
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column>
            <Placeholder backgroundColor="blue" />
          </Column>
        </Columns>
      ),
    },
    {
      label: "Vertical Alignment",
      description:
        "Use alignY to align the child Column components top, center (defalut) or bottom",
      Code: () => (
        <Columns space="small" collapseBelow="sm" alignY="bottom">
          <Column>
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column>
            <Placeholder backgroundColor="blue" />
          </Column>
        </Columns>
      ),
    },
  ],
};
