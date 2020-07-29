import React from "react";
import { render } from "@origin-digital/ods-testing-library";

import { DataTable, DataTableProps } from "./DataTable";

const renderDataTable = (
  dataTableProps: Partial<DataTableProps> = {},
  hideHeadings = false,
  hideData = false
) =>
  render(
    <DataTable
      headings={!hideHeadings ? ["1", "2", "3"] : undefined}
      data={
        !hideData
          ? [
              ["One", "Two", "Three"],
              ["Uno", "Dos", "Tres"],
            ]
          : undefined
      }
      {...dataTableProps}
    />
  );

test("It renders", () => {
  const { container } = renderDataTable();
  expect(container.firstChild).toMatchSnapshot();
});

test("It renders 3 headings", () => {
  const { container } = renderDataTable();

  const tableHead = container.querySelectorAll("thead");
  const tableHeadCells = container.querySelectorAll("th");

  expect(tableHead).toHaveLength(1);
  expect(tableHeadCells).toHaveLength(3);
});

test("It renders 0 headings", () => {
  const { container } = renderDataTable({}, true);

  const tableHead = container.querySelectorAll("thead");
  const tableHeadCells = container.querySelectorAll("th");

  expect(tableHead).toHaveLength(0);
  expect(tableHeadCells).toHaveLength(0);
});

test("It renders 6 cells", () => {
  const { container } = renderDataTable();

  const tableCells = container.querySelectorAll("td");

  expect(tableCells).toHaveLength(6);
});

test("It renders nothing", () => {
  const { container } = renderDataTable({}, true, true);

  const table = container.querySelectorAll("table");

  expect(table).toHaveLength(0);
});
