import * as React from "react";
import MuiCardHeader, {
  CardHeaderProps as ICardHeader,
} from "@material-ui/core/CardHeader";

export interface CardHeaderProps extends ICardHeader {}

export const CardHeader = (props: ICardHeader) => (
  <MuiCardHeader {...props}>{props.children}</MuiCardHeader>
);
