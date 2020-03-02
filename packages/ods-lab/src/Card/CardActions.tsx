import * as React from "react";
import MuiCardActions, {
  CardActionsProps as ICardActions,
} from "@material-ui/core/CardActions";

export interface CardActionsProps extends ICardActions {}

export const CardActions = (props: CardActionsProps) => (
  <MuiCardActions {...props}>{props.children}</MuiCardActions>
);
