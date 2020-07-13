import React from "react";
/* eslint-disable react/display-name */
import { ComponentDocs } from "@origin-digital/ods-types";
import { generateTable } from "../Table/Table.helper";
import {
  Placeholder,
  TableCellProps,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "..";

export const docs: ComponentDocs<TableCellProps> = {
  category: "Content",
  componentName: "TableCell",
  description:
    "TableCell is a low-level content component. Open the examples in Playroom to see the behaviour of this component.",
  propDescriptions: {
    alignX: "This is a prop which aligns the cell content horizontally.",
    alignY: "This is a prop which aligns the cell content vertically.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateTable(),
    },
    additional: [
      {
        label: "Horizontal align",
        description: `In order to set the alignment in cells pass in "align" with a value.`,
        Code: () => (
          <Table bordered>
            <TableBody>
              <TableRow>
                <TableCell alignX="left">Left</TableCell>
                <TableCell alignX="center">Center</TableCell>
                <TableCell alignX="right">Right</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
      {
        label: "Vertical align",
        description: `In order to set the vertical alignment in cells pass in "valign" with a value.`,
        Code: () => (
          <Table bordered>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Placeholder height="100px" />
                </TableCell>
                <TableCell alignY="top">Top</TableCell>
                <TableCell alignY="center">Center</TableCell>
                <TableCell alignY="bottom">Bottom</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
      {
        label: "Horizontal merging",
        description: `In order merge two or more columns horizontally pass in "colSpan" with a numeric size.`,
        Code: () => (
          <Table bordered>
            <TableBody>
              <TableRow>
                <TableCell>Single</TableCell>
                <TableCell>Single</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Double</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
      {
        label: "Vertical merging",
        description: `In order merge two or more columns vertically pass in "rowSpan" with a numeric size.`,
        Code: () => (
          <Table bordered>
            <TableBody>
              <TableRow>
                <TableCell>Single</TableCell>
                <TableCell rowSpan={2} alignY="top">
                  Double
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Single</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
    ],
  },
  snippets: [],
};
