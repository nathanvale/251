import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableProps,
  TableCellProps,
} from "..";

const renderTableCell = (
  tableCellProps: Partial<TableCellProps> = {},
  tableProps: Partial<TableProps> = {}
) =>
  render(
    <Table {...tableProps}>
      <TableBody>
        <TableRow>
          <TableCell {...tableCellProps}>Hello world</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

test("It renders", () => {
  const { container } = renderTableCell();
  expect(container).toMatchSnapshot();
});

test("It adds horizontal align", () => {
  const { container } = renderTableCell({ alignX: "right" });
  expect(container).toMatchSnapshot();
});

test("It adds vertical align", () => {
  const { container } = renderTableCell({ alignY: "bottom" });
  expect(container).toMatchSnapshot();
});

test("It adds borders", () => {
  const { container } = renderTableCell({}, { bordered: true });
  expect(container).toMatchSnapshot();
});

test("It uses small padding", () => {
  const { container } = renderTableCell({}, { size: "small" });
  expect(container).toMatchSnapshot();
});

test("It uses medium padding", () => {
  const { container } = renderTableCell({}, { size: "medium" });
  expect(container).toMatchSnapshot();
});

test("It does not remove first and last padding", () => {
  const { container } = renderTableCell({}, { striped: true });
  expect(container).toMatchSnapshot();
});
