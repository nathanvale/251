import React from "react";
import MuiTableHead, {
  TableHeadProps as ITableHead,
} from "@material-ui/core/TableHead";

export interface TableHeadProps extends ITableHead {
  "data-id": string;
}

export const TableHead = (props: TableHeadProps) => (
  <MuiTableHead {...props}>{props.children}</MuiTableHead>
);
