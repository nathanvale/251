import React, { useMemo, createContext } from "react";
import clsx from "clsx";
import MuiTable, { TableProps as MuiTableProps } from "@material-ui/core/Table";
import MuiTableContainer from "@material-ui/core/TableContainer";
import { makeStyles } from "@material-ui/core/styles";
import {
  OptionalTrackableProps,
  MuiProps,
  AlignXType,
} from "@origin-digital/ods-types";

const useTableStyles = makeStyles(
  (theme) => ({
    withBorder: {
      borderTop: `1px solid ${theme.palette.grey[200]}`,
      borderCollapse: "collapse",
    },
  }),
  { classNamePrefix: "Table" }
);

const useTableContainerStyles = makeStyles(
  () => ({
    withMaxHeight: ({ maxHeight }: TableContainerStylesProps) => ({
      overflowX: "auto",
      maxHeight: `${
        typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
      }`,
    }),
    withStickyHeader: {
      overflowX: "initial",
    },
  }),
  {
    classNamePrefix: "TableContainer",
  }
);

export interface TableProps
  extends OptionalTrackableProps,
    MuiProps<MuiTableProps>,
    Pick<MuiTableProps, "children" | "stickyHeader"> {
  "aria-label"?: string;
  alignX?: AlignXType;
  bordered?: boolean;
  hover?: boolean;
  size?: "small" | "medium";
  striped?: boolean;
  maxHeight?: number | string;
}

type TableContextValue = Pick<
  TableProps,
  "alignX" | "bordered" | "hover" | "size" | "striped"
>;

type TableContainerStylesProps = Pick<TableProps, "maxHeight">;

export const defaultProps: Partial<TableProps> = {
  "data-id": "table",
  size: "medium",
};

export const TableContext = createContext<TableContextValue>({
  size: defaultProps.size,
});

export const Table = ({
  alignX,
  children,
  bordered,
  hover,
  maxHeight,
  size,
  stickyHeader,
  striped,

  muiProps,
  ...props
}: TableProps) => {
  // Prevent re-renders when context values haven't changed
  const tableContextValue = useMemo(
    () => ({ alignX, bordered, hover, size, striped }),
    [alignX, bordered, hover, size, striped]
  );

  const { withBorder } = useTableStyles();
  const { withMaxHeight, withStickyHeader } = useTableContainerStyles({
    maxHeight,
  });

  return (
    <TableContext.Provider value={tableContextValue}>
      <MuiTableContainer
        className={clsx({
          [withStickyHeader]: stickyHeader,
          [withMaxHeight]: maxHeight,
        })}
      >
        <MuiTable
          className={clsx({ [withBorder]: bordered })}
          stickyHeader={stickyHeader}
          {...props}
          {...(muiProps || {})}
        >
          {children}
        </MuiTable>
      </MuiTableContainer>
    </TableContext.Provider>
  );
};

Table.defaultProps = defaultProps;

Table.displayName = "Table";
