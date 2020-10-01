import React from "react";
import clsx from "clsx";
import MuiTableHead, {
  TableHeadProps as MuiTableHeadProps,
} from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/core/styles";
import { MuiProps, ComponentBaseProps } from "@origin-digital/ods-types/src";

const useTableHeadStyles = makeStyles(
  (theme) => ({
    whiteBackground: {
      "&>th": {
        background: theme.palette.common.white,
      },
    },
  }),
  { classNamePrefix: "TableHead" }
);

export interface TableHeadProps
  extends Omit<ComponentBaseProps, "children">,
    MuiProps<MuiTableHeadProps>,
    Pick<MuiTableHeadProps, "children"> {}

export const TableHead = ({ children, muiProps, ...props }: TableHeadProps) => {
  const { whiteBackground } = useTableHeadStyles();

  return (
    <MuiTableHead
      className={clsx(whiteBackground)}
      {...props}
      {...(muiProps || {})}
    >
      {children}
    </MuiTableHead>
  );
};
TableHead.defaultProps = {
  "data-id": "table-head",
};

TableHead.displayName = "TableHead";
