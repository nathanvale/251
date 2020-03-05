import * as React from "react";
import MuiListItem, {
  ListItemProps as IListItem,
} from "@material-ui/core/ListItem";

export interface ListItemProps extends IListItem {}

export const ListItem = (props: ListItemProps) => {
  const { button, ...other } = props;
  return <MuiListItem {...other} />;
};
