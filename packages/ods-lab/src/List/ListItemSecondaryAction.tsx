import * as React from "react";
import MuiListItemSecondaryAction, {
  ListItemSecondaryActionProps as IListItemSecondaryAction,
} from "@material-ui/core/ListItemSecondaryAction";

export interface ListItemSecondaryActionProps
  extends IListItemSecondaryAction {}

export const ListItemSecondaryAction = (
  props: ListItemSecondaryActionProps,
) => (
  <MuiListItemSecondaryAction {...props}>
    {props.children}
  </MuiListItemSecondaryAction>
);
