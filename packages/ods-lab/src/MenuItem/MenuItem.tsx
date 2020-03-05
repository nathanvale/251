import * as React from "react";
import MuiMenuItem, {
  MenuItemProps as IMenuItem,
} from "@material-ui/core/MenuItem";

export interface MenuItemProps extends IMenuItem {}

export const MenuItem = (props: MenuItemProps) => {
  const { children, button, ...other } = props;
  return <MuiMenuItem {...other}>{children}</MuiMenuItem>;
};
