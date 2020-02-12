/* eslint-disable react/display-name */
import React from "react";
import {ComponentDocs} from "../../../../docs/src/types";
import {Columns, Column, ColumnProps, Placeholder} from "..";

export const docs: ComponentDocs<ColumnProps> = {
  category: "Layout",
  componentName: "Column",
  description:
    "Column is a low-level atomic layout component. Its is used with its parent <Columns/> to provide 12 grid layout as well as flex Placeholder style layout.",
  propDescriptions: {
    width: "Some interesting facts about the width prop to go here...",
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
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column>
            <Placeholder backgroundColor="blue" />
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
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column width="1/6">
            <Placeholder backgroundColor="red" />
          </Column>
          <Column width="1/6">
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column width="1/12">
            <Placeholder backgroundColor="red" />
          </Column>
          <Column width="1/2">
            <Placeholder backgroundColor="blue" />
          </Column>
        </Columns>
      ),
    },
    {
      label: "Mixing Column Widths With Content Width and Fluid Width",
      Code: () => (
        <Columns space="small">
          <Column>
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column width="1/3">
            <Placeholder backgroundColor="red" />
          </Column>
          <Column width="1/4">
            <Placeholder backgroundColor="orange" />
          </Column>
          <Column width="content">
            <Placeholder backgroundColor="green" />
          </Column>
        </Columns>
      ),
    },
    {
      label: "Stretching Space Between Columns",
      Code: () => (
        <Columns space="small">
          <Column width="content">
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column>
            <Placeholder backgroundColor="blue" />
          </Column>
          <Column width="content">
            <Placeholder backgroundColor="blue" />
          </Column>
        </Columns>
      ),
    },
  ],
};
