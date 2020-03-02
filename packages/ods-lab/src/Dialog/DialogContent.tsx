import * as React from "react";
import MuiDialogContent, {
  DialogContentProps as IDialogContent,
} from "@material-ui/core/DialogContent";

export interface DialogContentProps extends IDialogContent {}

export const DialogContent = (props: DialogContentProps) => (
  <MuiDialogContent {...props}>{props.children}</MuiDialogContent>
);
