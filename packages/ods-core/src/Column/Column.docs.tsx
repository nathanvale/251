/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "../../../../docs/src/types";
import { Columns, Column, ColumnProps, Placeholder } from "..";

export const docs: ComponentDocs<ColumnProps> = {
  category: "Layout",
  componentName: "Column",
  description:
    "Column is a low-level atomic layout component. Its is used with its parent <Columns/> to provide 12 grid layout as well as flex Placeholder style layout.",
  propDescriptions: {
    width: "Width is used here",
  },
  migrationGuide: false,
  examples: [
    {
      label: "Evenly Distributed Columns",
      description:
        "When a Column is given no width they evenly take up their available space in relation to other columns.",
      Code: () => (
        <Columns space="small">
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
      label: "Defining Column Widths",
      description: `Bootstrap style 12 column layout can be achieved by passing in column widths.`,
      Code: () => (
        <Columns space="small">
          <Column width="1/12">
            <Placeholder />
          </Column>
          <Column width="1/6">
            <Placeholder />
          </Column>
          <Column width="1/6">
            <Placeholder />
          </Column>
          <Column width="1/12">
            <Placeholder />
          </Column>
          <Column width="1/2">
            <Placeholder />
          </Column>
        </Columns>
      ),
    },
    {
      label: "Mixing Column Widths With Content Width and Fluid Width",
      Code: () => (
        <Columns space="small">
          <Column>
            <Placeholder />
          </Column>
          <Column width="1/3">
            <Placeholder />
          </Column>
          <Column width="1/4">
            <Placeholder />
          </Column>
          <Column width="content">
            <Placeholder label="content" />
          </Column>
        </Columns>
      ),
    },
    {
      label: "Stretching Space Between Columns",
      Code: () => (
        <Columns space="small">
          <Column width="content">
            <Placeholder label="content" />
          </Column>
          <Column>
            <Placeholder />
          </Column>
          <Column width="content">
            <Placeholder label="content" />
          </Column>
        </Columns>
      ),
    },
  ],
};
