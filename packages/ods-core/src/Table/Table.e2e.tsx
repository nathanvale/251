/* eslint-disable react/display-name */
import { E2ETests } from "@origin-digital/ods-types";
import { generateTable } from "./Table.helper";

export const tests: E2ETests = [
  {
    label: "Default Table",
    Code: () => generateTable(),
    responsive: true,
  },
  {
    label: "Dense table",
    Code: () => generateTable({ size: "small" }),
    responsive: true,
  },
  {
    label: "Striped rows",
    Code: () => generateTable({ striped: true }),
    responsive: true,
  },
  {
    label: "Bordered",
    Code: () => generateTable({ bordered: true }),
    responsive: true,
  },
  {
    label: "Hover effect",
    Code: () => generateTable({ hover: true }),
    responsive: true,
  },
  {
    label: "Sticky header",
    Code: () => generateTable({ stickyHeader: true }),
    responsive: true,
  },
  {
    label: "Without header",
    Code: () => generateTable({}, { hideTableHead: true }),
    responsive: true,
  },
];
