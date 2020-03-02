import * as React from "react";
import MuiExpansionPanelDetails, {
  ExpansionPanelDetailsProps as IExpansionPanelDetails,
} from "@material-ui/core/ExpansionPanelDetails";

export interface ExpansionPanelDetailsProps extends IExpansionPanelDetails {}

export const ExpansionPanelDetails = (props: ExpansionPanelDetailsProps) => (
  <MuiExpansionPanelDetails {...props}>
    {props.children}
  </MuiExpansionPanelDetails>
);
