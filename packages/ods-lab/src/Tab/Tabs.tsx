import React from "react";
import MuiTabs, { TabsProps as ITabs } from "@material-ui/core/Tabs";

export interface TabsProps extends ITabs {}

export const Tabs = (props: TabsProps) => (
  <MuiTabs {...props} TabIndicatorProps={{ children: <div /> }}>
    {props.children}
  </MuiTabs>
);
