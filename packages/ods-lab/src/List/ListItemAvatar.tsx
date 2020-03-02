import * as React from "react";
import MuiListItemAvatar, {
  ListItemAvatarProps as IListItemAvatar,
} from "@material-ui/core/ListItemAvatar";

export interface ListItemAvatarProps extends IListItemAvatar {}

export const ListItemAvatar = (props: ListItemAvatarProps) => (
  <MuiListItemAvatar {...props} />
);
