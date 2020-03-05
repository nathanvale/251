import * as React from "react";
import MuiFade, { FadeProps as IFade } from "@material-ui/core/Fade";

export interface FadeProps extends IFade {
  children: React.ReactNode;
}

export const Fade = (props: FadeProps) => (
  <MuiFade {...props}>{props.children}</MuiFade>
);
