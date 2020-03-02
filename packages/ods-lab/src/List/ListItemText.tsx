import * as React from "react";
import MuiListItemText, {
  ListItemTextProps as IListItemText,
} from "@material-ui/core/ListItemText";

export interface ListItemTextProps extends IListItemText {}

export const ListItemText = (props: ListItemTextProps) => (
  <MuiListItemText {...props}>{props.children}</MuiListItemText>
);
