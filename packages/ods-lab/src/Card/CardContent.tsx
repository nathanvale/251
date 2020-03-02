import * as React from "react";
import MuiCardContent, {
  CardContentProps as ICardContent,
} from "@material-ui/core/CardContent";

export interface CardContentProps extends ICardContent {
  "data-id"?: string;
}

export const CardContent = (props: CardContentProps) => (
  <MuiCardContent {...props}>{props.children}</MuiCardContent>
);
