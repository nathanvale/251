import React from "react";
import MuiTableBody, {
  TableBodyProps as MuiTableBodyProps,
} from "@material-ui/core/TableBody";
import { MuiProps, ComponentBaseProps } from "@origin-digital/ods-types";

export interface TableBodyProps
  extends Omit<ComponentBaseProps, "children">,
    MuiProps<MuiTableBodyProps>,
    Pick<MuiTableBodyProps, "children"> {}

export const TableBody = ({ children, muiProps, ...props }: TableBodyProps) => {
  return (
    <MuiTableBody {...props} {...(muiProps || {})}>
      {children}
    </MuiTableBody>
  );
};

TableBody.defaultProps = {
  "data-id": "table-body",
};

TableBody.displayName = "TableBody";
