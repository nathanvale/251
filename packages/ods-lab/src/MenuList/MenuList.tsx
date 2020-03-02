import * as React from "react";
import MuiMenuList, {
  MenuListProps as IMenuList,
} from "@material-ui/core/MenuList";

export interface MenuListProps extends IMenuList {}

export const MenuList = (props: MenuListProps) => (
  <MuiMenuList {...props}>{props.children}</MuiMenuList>
);
