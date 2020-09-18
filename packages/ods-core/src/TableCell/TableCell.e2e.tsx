import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Table } from "../Table";
import { TableBody } from "../TableBody";
import { TableRow } from "../TableRow";
import { Placeholder } from "../Placeholder";
import { TableCell } from "./TableCell";

export const tests: E2ETests = [
  {
    label: "Default TableCell",
    Code: () => (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>One</TableCell>
            <TableCell>Two</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    label: "Horizontal aligned TableCell",
    Code: () => (
      <Table>
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
    label: "Vertical aligned TableCell",
    Code: () => (
      <Table>
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
    label: "Horizontal merged TableCell",
    Code: () => (
      <Table>
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
    label: "Vertical merged TableCell",
    Code: () => (
      <Table>
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
];
