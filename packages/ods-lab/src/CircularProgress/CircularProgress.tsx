import React from "react";
import MuiCircularProgress, {
  CircularProgressProps as ICircularProgress,
} from "@material-ui/core/CircularProgress";

export interface CircularProgressProps extends ICircularProgress {}

export const CircularProgress = (props: CircularProgressProps) => (
  <MuiCircularProgress {...props}>{props.children}</MuiCircularProgress>
);
