import React from "react";
import { IconProps } from "@origin-digital/ods-types";
import { IconSVG } from "./_private/IconSvg";

export const IconPlay = ({ color, style }: IconProps) => (
  <IconSVG
    color={color}
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      marginLeft: "0px",
      fill: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      ...style,
    }}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </IconSVG>
);
