import * as React from "react";
import MuiGrow, { GrowProps as IGrow } from "@material-ui/core/Grow";

export interface GrowProps extends IGrow {
}

export const Grow = (props: GrowProps) => (
  <MuiGrow {...props}>{props.children}</MuiGrow>
);
