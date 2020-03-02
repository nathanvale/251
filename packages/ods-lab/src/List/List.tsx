import * as React from "react";
import MuiList, {ListProps as IList} from "@material-ui/core/List";

export interface ListProps extends IList {}

export const List = (props: ListProps) => (
  <MuiList {...props}>{props.children}</MuiList>
);
