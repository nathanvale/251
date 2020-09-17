import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Table } from "../Table";
import { TableBody } from "../TableBody";
import { TableCell } from "../TableCell";
import { TableRow, TableRowProps } from "./TableRow";

const renderTableRow = (tableRowProps: Partial<TableRowProps> = {}) =>
  render(
    <Table>
      <TableBody>
        <TableRow {...tableRowProps}>
          <TableCell>Hello world</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

test("It renders", () => {
  const { container } = renderTableRow();
  expect(container).toMatchSnapshot();
});
test("It adds class name", () => {
  const className = "myCustomClass";
  const { container, getAllByTestId } = renderTableRow({
    className,
  });
  expect(getAllByTestId("table-row").pop()?.classList).toContain(className);
  expect(container).toMatchSnapshot();
});
