import * as React from "react";
import MuiPaper, {PaperProps as IPaper} from "@material-ui/core/Paper";

export interface PaperProps extends IPaper {}

export const Paper = (props: PaperProps) => (
  <MuiPaper {...props}>{props.children}</MuiPaper>
);
