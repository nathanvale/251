import * as React from "react";
import MuiAlert, {AlertProps as IAlert} from "@material-ui/lab/Alert";

export interface AlertProps extends IAlert {}

export const Alert = (props: AlertProps) => (
  <MuiAlert {...props}>{props.children}</MuiAlert>
);
