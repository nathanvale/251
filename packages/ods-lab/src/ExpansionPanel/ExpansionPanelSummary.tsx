import * as React from "react";
import MuiExpansionPanelSummary, {
  ExpansionPanelSummaryProps as IExpansionPanelSummary,
} from "@material-ui/core/ExpansionPanelSummary";

export interface ExpansionPanelSummaryProps extends IExpansionPanelSummary {}

export const ExpansionPanelSummary = (props: ExpansionPanelSummaryProps) => (
  <MuiExpansionPanelSummary {...props}>
    {props.children}
  </MuiExpansionPanelSummary>
);
