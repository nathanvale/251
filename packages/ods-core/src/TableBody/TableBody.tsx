import React from "react";
import MuiTableBody, {
  TableBodyProps as MuiTableBodyProps,
} from "@material-ui/core/TableBody";
import { OptionalTrackableProps, MuiProps } from "@origin-digital/ods-types";

export interface TableBodyProps
  extends OptionalTrackableProps,
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
