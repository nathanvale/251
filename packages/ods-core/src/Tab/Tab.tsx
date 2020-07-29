import React from "react";
import {
  Tab as MuiTab,
  TabProps as MuiTabProps,
  makeStyles,
  Theme,
  fade,
} from "@material-ui/core";
import { ComponentBaseProps } from "@origin-digital/ods-types";
import { useTracking } from "../TrackingProvider/useTracking";
import { Box } from "../Box/Box";

export interface TabProps extends ComponentBaseProps {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  value?: string | number;
  muiProps?: MuiTabProps;
}

const useTabStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      color: theme.palette.secondaryB.main,
      opacity: 1,
      textTransform: "none",
      padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
      fontSize: `${theme.typography.body1.fontSize}px`,
      "&:hover": {
        color: theme.palette.grey[600],
        backgroundColor: theme.palette.grey[100],
      },
      "&$selected .MuiTab-wrapper": {
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&$selected svg": {
        fill: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
      },
      "&$selected:hover": {
        backgroundColor: fade(theme.palette.secondary.main, 0.08),
      },
      "&:focus": {
        color: theme.palette.grey[600],
        backgroundColor: fade(theme.palette.secondary.main, 0.16),
      },
      "&:active": {
        color: theme.palette.grey[600],
        backgroundColor: fade(theme.palette.secondary.main, 0.24),
      },
    },
    selected: {},
  }),
  { classNamePrefix: "tab" }
);

export const Tab = ({
  icon,
  label,
  "data-id": dataId = "tab",
  muiProps,
  value,
  ...others
}: TabProps) => {
  const classes = useTabStyles();
  const { onClickCapture, ref } = useTracking({
    children: label,
    "data-id": dataId,
    type: Tab.displayName,
    postClickState: "selected",
  });
  return (
    <MuiTab
      disableRipple
      data-id={dataId}
      classes={classes}
      onClickCapture={onClickCapture}
      ref={ref}
      label={
        <Box display="flex" flexDirection="row" justifyContent="center">
          {icon && <Box marginRight="xsmall">{icon}</Box>}
          {label}
        </Box>
      }
      value={value}
      id={`tab-${value}`}
      aria-controls={`tabpanel-${value}`}
      {...muiProps}
      {...others}
    />
  );
};

Tab.defaultProps = {
  "data-id": "tab",
};
Tab.displayName = "Tab";
