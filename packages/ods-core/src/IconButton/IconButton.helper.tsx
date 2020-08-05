import React from "react";
import { IconAccountBalance, SvgIconProps } from "@origin-digital/ods-icons";
import { Text, TextProps } from "../Text/Text";
import { IconButton, IconButtonProps } from "./IconButton";

export const generateIconButton = (
  iconButtonProps: Partial<IconButtonProps> = {},
  iconProps: Partial<SvgIconProps> = {},
  textProps?: TextProps
) => {
  const iconButton = (
    <IconButton {...iconButtonProps}>
      <IconAccountBalance {...iconProps} />
    </IconButton>
  );
  if (textProps) {
    return <Text {...textProps}>{iconButton}</Text>;
  }
  return iconButton;
};
