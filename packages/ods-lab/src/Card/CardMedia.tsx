import * as React from "react";
import MuiCardMedia, {
  CardMediaProps as ICardMedia,
} from "@material-ui/core/CardMedia";

export interface CardMediaProps extends ICardMedia {
  "data-id"?: string;
}

export const CardMedia = (props: CardMediaProps) => (
  <MuiCardMedia {...props}>{props.children}</MuiCardMedia>
);
