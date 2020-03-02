import * as React from "react";
import MuiCollapse, {
  CollapseProps as ICollapse,
} from "@material-ui/core/Collapse";

export interface CollapseProps extends ICollapse {}

export const Collapse = (props: CollapseProps) => (
  <MuiCollapse {...props}>
    <div>{props.children}</div>
  </MuiCollapse>
);
