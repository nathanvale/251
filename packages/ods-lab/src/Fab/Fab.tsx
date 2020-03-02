import * as React from "react";
import MuiFab, {FabProps as IFab} from "@material-ui/core/Fab";

export interface FabProps extends IFab {}

export const Fab = (props: FabProps) => {
  return <MuiFab {...props}>{props.children}</MuiFab>;
};
