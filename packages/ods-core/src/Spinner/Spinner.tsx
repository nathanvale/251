import * as React from "react";
import { CircularProgress } from "@material-ui/core";
import {
  GraphicColorVariants,
  MuiBasedComponentBaseProps,
} from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";

export type SpinnerSize = "xsmall" | "small" | "medium" | "large";
export type SpinnerColor = "inherit" | GraphicColorVariants;

export interface SpinnerProps
  extends Omit<MuiBasedComponentBaseProps, "children" | "disabled"> {
  size?: SpinnerSize;
  color?: SpinnerColor;
}

const mapSizeToPixel = (size: SpinnerSize) => {
  if (size === "small") {
    return 24;
  }
  if (size === "medium") {
    return 48;
  }
  if (size === "large") {
    return 72;
  }
  return 20;
};

const useColorStyles = makeStyles(
  (theme) => ({
    root: ({ color }: { color: SpinnerColor }) =>
      color === "white"
        ? {
            color: theme.palette.common.white,
          }
        : {},
  }),
  { classNamePrefix: "spinner" }
);
export const Spinner = ({
  color = "secondary",
  size = "xsmall",
  classes,
  ...other
}: SpinnerProps) => {
  const spinnerSize = mapSizeToPixel(size);

  // We cannot set color white via color prop, need to use classes for it.
  const spinnerClasses = useColorStyles({ color });

  return (
    <CircularProgress
      color={color !== "secondary" ? "inherit" : "secondary"}
      size={spinnerSize}
      classes={{
        ...classes,
        ...(spinnerClasses || {}),
      }}
      {...other}
    />
  );
};

Spinner.displayName = "Spinner";
Spinner.defaultProps = {
  color: "secondary",
  "data-id": "spinner",
  size: "small",
};
