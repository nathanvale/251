import * as React from "react";
import MuiGrid, { GridProps as IGrid } from "@material-ui/core/Grid";

export interface GridProps extends IGrid {}

export const Grid = (props: GridProps) => (
  <MuiGrid {...props}>{props.children}</MuiGrid>
);
