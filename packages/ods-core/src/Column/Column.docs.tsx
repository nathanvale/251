import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Columns } from "../Columns/Columns";
import { Placeholder } from "../Placeholder/Placeholder";
import { Stack } from "../Stack/Stack";
import { Column, ColumnProps, widthValueMap } from "./Column";

export const docs: ComponentDocs<ColumnProps> = {
  category: "Layout",
  componentName: "Column",
  description:
    "Column is a low-level atomic layout component. Its is used with its parent Columns to provide 12 grid layout as well as flex Placeholder style layout.",
  propDescriptions: {
    width:
      "Bootstrap style 12 column layout can be achieved by passing in a column width.",
    alignX:
      "This is a responsive prop which aligns the children horizontally. This prop overrides alignX set by the Columns container.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <Columns space="small">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },
    additional: [
      {
        label: "Defining Column Widths",
        description: `Bootstrap style 12 column layout can be achieved by passing in column widths.`,
        Code: () => (
          <Stack space="medium">
            {Object.keys(widthValueMap)
              .filter((key) => key !== "flex")
              .map((width) => (
                <Columns space="small" key={width}>
                  <Column width={width as any}>
                    <Placeholder height={60} label={width} />
                  </Column>
                  <Column>
                    <Placeholder height={60} />
                  </Column>
                </Columns>
              ))}
          </Stack>
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
      {
        label: "Horizontal alignment",
        Code: () => (
          <Columns>
            <Column>
              <Placeholder />
            </Column>
            <Column alignX={["center", "right"]}>
              <Placeholder width="50px" height="50px" />
            </Column>
          </Columns>
        ),
      },
    ],
  },
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
