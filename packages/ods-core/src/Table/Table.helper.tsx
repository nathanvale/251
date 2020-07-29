import React from "react";
import { TableBody } from "../TableBody/TableBody";
import { TableCell } from "../TableCell/TableCell";
import { TableHead } from "../TableHead/TableHead";
import { TableRow } from "../TableRow/TableRow";
import { Table, TableProps } from "./Table";

export const generateTable = (
  tableProps: Partial<TableProps> = {},
  otherProps: Partial<{
    hideTableHead: boolean;
    showExtraRows: boolean;
  }> = {}
) => {
  return (
    <Table {...tableProps}>
      {!otherProps.hideTableHead && (
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Role</TableCell>
        </TableHead>
      )}

      <TableBody>
        <TableRow>
          <TableCell>Jane</TableCell>
          <TableCell>32</TableCell>
          <TableCell>Software Engineer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>43</TableCell>
          <TableCell>Business Analyst</TableCell>
        </TableRow>

        {otherProps.showExtraRows && (
          <>
            <TableRow>
              <TableCell>Janet</TableCell>
              <TableCell>31</TableCell>
              <TableCell>Project Manager</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jason</TableCell>
              <TableCell>23</TableCell>
              <TableCell>Software Engineer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jay</TableCell>
              <TableCell>52</TableCell>
              <TableCell>Software Engineer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Joli</TableCell>
              <TableCell>23</TableCell>
              <TableCell>Software Engineer</TableCell>
            </TableRow>
          </>
        )}
      </TableBody>
    </Table>
  );
};
