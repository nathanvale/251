import * as React from "react";
import MuiAlertTitle, {
  AlertTitleProps as IAlertTitle,
} from "@material-ui/lab/AlertTitle";

export interface AlertTitleProps extends IAlertTitle {}

export const AlertTitle = (props: AlertTitleProps) => (
  <MuiAlertTitle {...props}>{props.children}</MuiAlertTitle>
);
