/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Columns, Column, ColumnProps, Placeholder, Stack } from "..";

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
  snippets: [
    {
      label: "2 Columns",
      Code: () => (
        <Columns space="small">
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
        </Columns>
      ),
    },
    {
      label: "2 Columns (Collapse Below Tablet)",
      Code: () => (
        <Columns space="small" collapseBelow="md">
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
        </Columns>
      ),
    },
    {
      label: "3 Columns",
      Code: () => (
        <Columns space="small">
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
        </Columns>
      ),
    },
    {
      label: "3 Columns (Collapse Below Tablet)",
      Code: () => (
        <Columns space="small" collapseBelow="md">
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Placeholder height={60} label="Column" />
            </Stack>
          </Column>
        </Columns>
      ),
    },
    {
      label: "Main Content With Sidebar",
      Code: () => (
        <Columns space="small" collapseBelow="md">
          <Column width="2/3">
            <Stack space="small">
              <Placeholder height={400} label="Main" />
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Placeholder height={100} label="Sidebar" />
            </Stack>
          </Column>
        </Columns>
      ),
    },
  ],
};
