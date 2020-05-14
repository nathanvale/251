import React from "react";
import { IconProps } from "@origin-digital/ods-types";
import { IconSVG } from "./_private/IconSvg";

export const IconCopy = ({ color, style }: IconProps) => (
  <IconSVG
    color={color}
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      marginLeft: "-4px",
      fill: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      ...style,
    }}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </IconSVG>
);
