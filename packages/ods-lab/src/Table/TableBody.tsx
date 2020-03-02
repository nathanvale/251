import React from "react";
import MuiTableBody, {
  TableBodyProps as ITableBody,
} from "@material-ui/core/TableBody";

export interface TableBodyProps extends ITableBody {
  "data-id": string;
}

export const TableBody = (props: TableBodyProps) => (
  <MuiTableBody {...props}>{props.children}</MuiTableBody>
);
