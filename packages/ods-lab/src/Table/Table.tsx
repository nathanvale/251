import React from "react";
import MuiTable, {TableProps as ITable} from "@material-ui/core/Table";

export interface TableProps extends ITable {
  "data-id": string;
  dense?: boolean;
}

export const Table = (props: TableProps) => (
  <MuiTable {...props} size={props.dense ? "small" : props.size}>
    {props.children}
  </MuiTable>
);
