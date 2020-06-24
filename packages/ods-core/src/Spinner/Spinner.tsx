import * as React from "react";
import { CircularProgress } from "@material-ui/core";
import { ComponentBaseProps } from "@origin-digital/ods-types";

export interface SpinnerProps extends ComponentBaseProps {
  size?: "xsmall" | "small" | "medium" | "large";
  color?: "inherit" | "primary" | "secondary";
}

export const Spinner = ({
  color = "secondary",
  size = "xsmall",
  ...other
}: SpinnerProps) => {
  let spinnerSize = 20;
  if (size === "small") {
    spinnerSize = 24;
  } else if (size === "medium") {
    spinnerSize = 48;
  } else if (size === "large") {
    spinnerSize = 72;
  }

  return <CircularProgress color={color} size={spinnerSize} {...other} />;
};

Spinner.displayName = "Spinner";
Spinner.defaultProps = {
  color: "secondary",
  size: "small",
};
