import * as React from "react";
import MuiIcon, {IconProps as IIcon} from "@material-ui/core/Icon";

export interface IconProps extends IIcon {}

// This is tied to a font icon approach
// https://material-ui.com/getting-started/installation/#font-icons
export const Icon = (props: IconProps) => (
  <MuiIcon {...props}>{props.children}</MuiIcon>
);
