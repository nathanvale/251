import React from "react";
import { Theme } from "@material-ui/core";
import { BaseSwitchBaseProps } from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";
import { AbstractSwitchBaseProps, SwitchBaseMuiProps } from "./abstract-types";

const useSwitchBaseStyle = makeStyles((theme: Theme) => ({
  root: ({ error }: BaseSwitchBaseProps) => ({
    padding: "6px",
    border: "none",
    boxShadow: "none",
    alignItems: "flex-start",
    "&&:hover": {
      boxShadow: "none",
    },
    "&:not(.Mui-checked):not(.Mui-disabled) .MuiSvgIcon-root": {
      ...(error ? { color: theme.palette.error.main } : {}),
    },
  }),
}));

export function AbstractSwitchBase<T extends SwitchBaseMuiProps>(
  props: AbstractSwitchBaseProps<T>,
) {
  const {
    "aria-describedby": describedBy,
    Component,
    muiProps,
    ...others
  } = props;
  const switchBaseClasses = useSwitchBaseStyle(props);

  return (
    <Component
      {...muiProps}
      {...others}
      inputProps={{
        ...(muiProps && muiProps.inputProps),
        "aria-describedby": describedBy,
      }}
      classes={switchBaseClasses}
    />
  );
}
