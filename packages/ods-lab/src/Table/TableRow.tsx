import React from "react";
import MuiTableRow, {
  TableRowProps as ITableRow,
} from "@material-ui/core/TableRow";
import {AllColors} from "../AllColors/AllColors";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  row: {
    "&:nth-of-type(odd)": {
      background: AllColors.grey8,
    },
  },
});

export interface TableRowProps extends ITableRow {
  "data-id": string;
  striped?: boolean;
}

export const TableRow = (props: TableRowProps) => {
  const classes = useStyles();
  return (
    <MuiTableRow {...props} className={props.striped ? classes.row : undefined}>
      {props.children}
    </MuiTableRow>
  );
};
