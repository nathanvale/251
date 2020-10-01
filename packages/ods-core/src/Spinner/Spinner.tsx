import * as React from "react";
import { CircularProgress } from "@material-ui/core";
import {
  GraphicToneVariants,
  MuiBasedComponentBaseProps,
} from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";

export type SpinnerSize = "xsmall" | "small" | "medium" | "large";
export type SpinnerTone = "inherit" | GraphicToneVariants;

export interface SpinnerProps
  extends Omit<MuiBasedComponentBaseProps, "children" | "disabled"> {
  size?: SpinnerSize;
  tone?: SpinnerTone;
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
    root: ({ tone }: { tone: SpinnerTone }) =>
      tone === "white"
        ? {
            color: theme.palette.common.white,
          }
        : {},
  }),
  { classNamePrefix: "spinner" }
);
export const Spinner = ({
  tone = "secondary",
  size = "xsmall",
  classes,
  ...other
}: SpinnerProps) => {
  const spinnerSize = mapSizeToPixel(size);

  const spinnerClasses = useColorStyles({ tone });

  return (
    <CircularProgress
      color={tone !== "secondary" ? "inherit" : "secondary"}
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
  tone: "secondary",
  "data-id": "spinner",
  size: "small",
};
