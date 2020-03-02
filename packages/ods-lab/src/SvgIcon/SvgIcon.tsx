import * as React from "react";
import MuiSvgIcon, {SvgIconProps as ISvgIcon} from "@material-ui/core/SvgIcon";

export interface SvgIconProps extends ISvgIcon {}

export const SvgIcon = (props: ISvgIcon) => (
  <MuiSvgIcon {...props}>{props.children}</MuiSvgIcon>
);
