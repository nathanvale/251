import React from "react";
import MuiTab, {TabProps as ITab} from "@material-ui/core/Tab";

export interface TabProps extends ITab {}

export const Tab = (props: TabProps) => (
  <MuiTab {...props}>{props.children}</MuiTab>
);
