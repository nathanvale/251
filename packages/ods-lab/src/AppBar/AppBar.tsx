import * as React from "react";
import MuiAppBar, { AppBarProps as IAppBar } from "@material-ui/core/AppBar";

export interface AppBarProps extends IAppBar {}

export const AppBar = (props: AppBarProps) => (
  <MuiAppBar {...props}>{props.children}</MuiAppBar>
);
