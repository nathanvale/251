import * as React from "react";
import MuiZoom, {ZoomProps as IZoom} from "@material-ui/core/Zoom";

export interface ZoomProps extends IZoom {
  children: React.ReactNode;
}

export const Zoom = (props: ZoomProps) => {
  const {children, ...other} = props;
  return (
    <MuiZoom {...other}>
      <div>{children}</div>
    </MuiZoom>
  );
};
