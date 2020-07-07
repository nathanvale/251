import React, { useContext } from "react";
import clsx from "clsx";
import MuiTableCell, {
  TableCellProps as MuiTableCellProps,
} from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import {
  OptionalTrackableProps,
  MuiProps,
  AlignYType,
  AlignXType,
} from "@origin-digital/ods-types";
import { TableProps, TableContext } from "../Table/Table";

interface TableCellStylesProps
  extends Pick<TableCellProps, "alignY">,
    Pick<TableProps, "size"> {}

const useTableCellStyles = makeStyles(
  (theme) => ({
    withVerticalAlign: ({ alignY }: TableCellStylesProps) => ({
      verticalAlign: alignY,
    }),
    withPadding: ({ size }: TableCellStylesProps) => ({
      padding: `${size === "small" ? "4px 12px" : "12px 16px"}`,
    }),
    withoutFirstLastPadding: {
      "&:first-child": {
        paddingLeft: 0,
      },
      "&:last-child": {
        paddingRight: 0,
      },
    },
    withBorder: {
      borderLeft: `1px solid ${theme.palette.grey[200]}`,
      borderRight: `1px solid ${theme.palette.grey[200]}`,
    },
  }),
  { classNamePrefix: "TableCell" }
);

export interface TableCellProps
  extends OptionalTrackableProps,
    MuiProps<MuiTableCellProps>,
    Pick<MuiTableCellProps, "children" | "colSpan" | "rowSpan" | "scope"> {
  alignX?: AlignXType;
  alignY?: AlignYType;
}

export const TableCell = ({
  children,
  alignY,
  muiProps,
  ...props
}: TableCellProps) => {
  const { alignX, bordered, hover, size, striped } = useContext(TableContext);
  const {
    withoutFirstLastPadding,
    withPadding,
    withBorder,
    withVerticalAlign,
  } = useTableCellStyles({ alignY, size });

  return (
    <MuiTableCell
      align={props.alignX || alignX}
      className={clsx(withPadding, withVerticalAlign, {
        [withBorder]: bordered,
        [withoutFirstLastPadding]: !bordered && !striped && !hover,
      })}
      {...props}
      {...(muiProps || {})}
    >
      {children}
    </MuiTableCell>
  );
};

TableCell.defaultProps = {
  "data-id": "table-cell",
};

TableCell.displayName = "TableCell";
