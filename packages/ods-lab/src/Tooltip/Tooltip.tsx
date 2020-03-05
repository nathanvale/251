import * as React from "react";
import MuiTooltip, {
  TooltipProps as ITooltip,
} from "@material-ui/core/Tooltip";

export interface TooltipProps extends ITooltip {}

export const Tooltip = (props: TooltipProps) => (
  <MuiTooltip {...props}>{props.children}</MuiTooltip>
);
