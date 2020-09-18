import React, { useContext } from "react";
import clsx from "clsx";
import MuiTableRow, {
  TableRowProps as MuiTableRowProps,
} from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { OptionalTrackableProps, MuiProps } from "@origin-digital/ods-types";
import { TableContext } from "../Table";

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
    Pick<MuiTableRowProps, "children"> {
  className?: string;
}

export const TableRow = ({
  children,
  className,
  muiProps,
  ...props
}: TableRowProps) => {
  const { withStripes, withHover } = useTableRowStyles();
  const { striped, hover } = useContext(TableContext);

  return (
    <MuiTableRow
      className={clsx(className, {
        [withHover]: hover && !striped,
        [withStripes]: striped,
      })}
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
