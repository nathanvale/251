import React from "react";
import MuiTableCell, {
  TableCellProps as ITableCell,
} from "@material-ui/core/TableCell";
import makeStyles from "@material-ui/styles/makeStyles";
import { AllColors } from "../AllColors/AllColors";

const useStyles = makeStyles({
  // This inherits the border from root - Must be applied to TableCells and TableHeader
  bordered: {
    borderLeft: `1px solid ${AllColors.grey200}`,
    borderRight: `1px solid ${AllColors.grey200}`,
  },
});

export interface TableCellProps extends ITableCell {
  bordered?: boolean;
  "data-id": string;
}

export const TableCell = (props: TableCellProps) => {
  const classes = useStyles();
  return (
    <MuiTableCell
      {...props}
      className={props.bordered ? classes.bordered : undefined}
    >
      {props.children}
    </MuiTableCell>
  );
};
