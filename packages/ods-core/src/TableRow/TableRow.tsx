import React, { useContext } from "react";
import clsx from "clsx";
import MuiTableRow, {
  TableRowProps as MuiTableRowProps,
} from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import {
  OptionalTrackableProps,
  MuiProps,
} from "@origin-digital/ods-types/src";
import { TableContext } from "../Table/Table";

const useTableRowStyles = makeStyles(
  (theme) => ({
    withStripes: {
      "&:nth-of-type(odd)": {
        background: theme.palette.grey[100],
      },
    },
    withHover: {
      "&:hover": {
        background: theme.palette.grey[100],
      },
    },
  }),
  { classNamePrefix: "TableRow" }
);

export interface TableRowProps
  extends OptionalTrackableProps,
    MuiProps<MuiTableRowProps>,
    Pick<MuiTableRowProps, "children"> {}

export const TableRow = ({ children, muiProps, ...props }: TableRowProps) => {
  const { withStripes, withHover } = useTableRowStyles();
  const { striped, hover } = useContext(TableContext);

  return (
    <MuiTableRow
      className={clsx(hover && !striped && withHover, striped && withStripes)}
      {...props}
      {...(muiProps || {})}
    >
      {children}
    </MuiTableRow>
  );
};

TableRow.defaultProps = {
  "data-id": "table-row",
};

TableRow.displayName = "TableRow";
