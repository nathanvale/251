import * as React from "react";
import MuiExpansionPanel, {
  ExpansionPanelProps as IExpansionPanel,
} from "@material-ui/core/ExpansionPanel";

export interface ExpansionPanelProps extends IExpansionPanel {}

export const ExpansionPanel = (props: ExpansionPanelProps) => (
  <MuiExpansionPanel {...props}>{props.children}</MuiExpansionPanel>
);
