import * as React from "react";
import MuiCardActionArea, {
  CardActionAreaProps as ICardActionArea,
} from "@material-ui/core/CardActionArea";

export interface CardActionAreaProps extends ICardActionArea {}

export const CardActionArea = (props: CardActionAreaProps) => (
  <MuiCardActionArea {...props}>{props.children}</MuiCardActionArea>
);
