import React from "react";
import { ToggleButton, ToggleButtonProps } from "./ToggleButton";

const defaultProps: ToggleButtonProps = {
  children: "Melbourne",
  value: "mlb",
};

export const generateToggleButton = (
  props: Partial<ToggleButtonProps> = {}
) => <ToggleButton {...defaultProps} {...props} />;
