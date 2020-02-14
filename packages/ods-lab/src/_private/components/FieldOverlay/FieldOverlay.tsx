import React from "react";
import {BoxProps} from "@origin-digital/ods-core";
import {Overlay, OverlayProps} from "../Overlay/Overlay";

export interface FieldOverlayProps
  extends Pick<OverlayProps, "children" | "visible" | "backgroundColor"> {
  variant?: FieldOverlayVariant;
}

type FieldOverlayVariant = "default" | "focus" | "hover" | "critical";

const boxShadowForVariant: Record<
  FieldOverlayVariant,
  BoxProps["boxShadow"]
> = {
  default: "borderStandard",
  focus: "outlineFocus",
  hover: "borderFormHover",
  critical: "borderCritical",
};

export const FieldOverlay = ({variant, ...restProps}: FieldOverlayProps) => (
  <Overlay
    boxShadow={boxShadowForVariant[variant!]}
    transition="fast"
    {...restProps}
  />
);
