import * as React from "react";
import MuiDrawer, { DrawerProps as IDrawer } from "@material-ui/core/Drawer";

export interface DrawerProps extends IDrawer {}

export const Drawer = (props: DrawerProps) => (
  <MuiDrawer {...props}>{props.children}</MuiDrawer>
);
