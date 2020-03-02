import * as React from "react";
import MuiListSubheader, {
  ListSubheaderProps as IListSubheader,
} from "@material-ui/core/ListSubheader";

export interface ListSubheaderProps extends IListSubheader {}

export const ListSubheader = (props: ListSubheaderProps) => (
  <MuiListSubheader {...props}>{props.children}</MuiListSubheader>
);
