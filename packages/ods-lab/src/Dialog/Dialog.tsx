import React from "react";
import MuiDialog, {DialogProps as IDialog} from "@material-ui/core/Dialog";

export interface DialogProps extends IDialog {}

export const Dialog = (props: DialogProps) => (
  <MuiDialog {...props}>{props.children}</MuiDialog>
);
