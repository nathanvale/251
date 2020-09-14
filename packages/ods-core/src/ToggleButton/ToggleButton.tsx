import React from "react";
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
} from "@material-ui/lab";
import { ComponentBaseProps, MuiProps } from "@origin-digital/ods-types";
import { fade, makeStyles } from "@material-ui/core/styles";

/**
 * selected toggle button:
 *   BG: rgba(255, 180, 50, 0.08) -> fade(secondary, 0.08)
 *   border: rgb(255, 180, 50) -> secondary?
 * selected hover:
 *   BG: rgba(255, 180, 50, 0.12) -> fade(secondary, 0.12)
 *   border: rgba(255, 180, 50) -> secondary?
 * not selected hover:
 *   BG: rgba(80, 80, 80, 0.04)
 *   border: rgba(80,80,80, 0.16)
 *
 * not selected disabled:
 *   BG: transparent
 *   color: rgba(80,80,80, 0.16)
 *   border: rgba(80,80,80, 0.16) (unchanged by disabled)
 *
 * selected disabled:
 *   BG: rgba(255, 180, 50, 0.08) (unchanged by disabled)
 */

export interface ToggleButtonProps
  extends Omit<ComponentBaseProps, "children"> {
  children: React.ReactNode;
  value: string | number;
  "aria-label"?: string;
  muiProps?: MuiProps<MuiToggleButtonProps>;
  selected?: boolean;
}

const useToggleButtonStyles = makeStyles(
  (theme) => ({
    root: {
      fontSize: theme.typography.body1.fontSize,
      border: `solid 1px ${theme.palette.grey[200]}`,
      color: theme.palette.grey[500],
      "&:hover": {
        backgroundColor: fade(theme.palette.grey[500], 0.04),
      },
      "&$selected$selected": {
        backgroundColor: fade(theme.palette.secondary.main, 0.08),
        border: `solid 1px ${theme.palette.secondary.main}`,
        color: theme.palette.grey[500],
        "& .MuiToggleButton-label": {
          fontWeight: theme.typography.fontWeightMedium,
        },
        "&:hover": {
          backgroundColor: fade(theme.palette.secondary.main, 0.12),
          border: `solid 1px ${theme.palette.secondary.main}`,
        },
      },
      "&$disabled": {
        color: theme.palette.grey[200],
      },
    },
    selected: {},
    disabled: {},
  }),
  { classNamePrefix: "toggle-button" }
);

export const ToggleButton = ({
  "aria-label": ariaLabel,
  children,
  classes,
  "data-id": dataId,
  muiProps,
  value,
  ...props
}: ToggleButtonProps) => {
  const calcAriaLabel =
    ariaLabel || (typeof children === "string" && children) || String(value);

  const calcDataId = dataId || value;

  const tbStyleClasses = useToggleButtonStyles();
  return (
    <MuiToggleButton
      aria-label={calcAriaLabel}
      classes={{ ...tbStyleClasses, ...(classes || {}) }}
      data-id={calcDataId}
      value={value}
      {...props}
      {...(muiProps || {})}
    >
      {children}
    </MuiToggleButton>
  );
};

ToggleButton.defaultProps = {};

ToggleButton.displayName = "ToggleButton";
