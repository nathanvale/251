import React, { ReactNode } from "react";
import { Table, TableProps, defaultProps } from "../Table/Table";
import { TableBody } from "../TableBody/TableBody";
import { TableCell } from "../TableCell/TableCell";
import { TableHead } from "../TableHead/TableHead";
import { TableRow } from "../TableRow/TableRow";

export interface DataTableProps
  extends Pick<TableProps, Exclude<keyof TableProps, "children">> {
  headings?: ReactNode[];
  data?: ReactNode[][];
}

export const DataTable = ({
  headings = [],
  data = [],
  muiProps,
  ...props
}: DataTableProps) =>
  !!headings.length || !!data.length ? (
    <Table {...props} {...(muiProps || {})}>
      {!!headings.length && (
        <TableHead>
          {headings.map((heading, headingIdx) => (
            <TableCell key={headingIdx}>{heading}</TableCell>
          ))}
        </TableHead>
      )}

      <TableBody>
        {data.map((row, rowIdx) => (
          <TableRow key={rowIdx}>
            {row.map((column, colIdx) => (
              <TableCell key={`${rowIdx}-${colIdx}`}>{column}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : null;

DataTable.defaultProps = {
  ...defaultProps,
  "data-id": "data-table",
};

DataTable.displayName = "DataTable";
