import React from "react";
import MuiTableRow, {
  TableRowProps as ITableRow,
} from "@material-ui/core/TableRow";
import makeStyles from "@material-ui/styles/makeStyles";
import { AllColors } from "../AllColors/AllColors";

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
