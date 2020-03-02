import * as React from "react";
import MuiListItemIcon, {
  ListItemIconProps as IListItemIcon,
} from "@material-ui/core/ListItemIcon";

export interface ListItemIconProps extends IListItemIcon {}

export const ListItemIcon = (props: ListItemIconProps) => (
  <MuiListItemIcon {...props}>{props.children}</MuiListItemIcon>
);
