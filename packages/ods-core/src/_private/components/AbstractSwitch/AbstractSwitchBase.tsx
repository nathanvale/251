import React from "react";
import { Theme } from "@material-ui/core";
import { BaseSwitchBaseProps } from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";
import { AbstractSwitchBaseProps, SwitchBaseMuiProps } from "./abstract-types";

const useSwitchBaseStyles = (props: BaseSwitchBaseProps) => {
  const styleCreator = makeStyles(
    (theme: Theme) => ({
      root: ({ error }: BaseSwitchBaseProps) => ({
        padding: "8px",
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
    }),
    { classNamePrefix: `AbstractSwitchBase${props.error ? "-error" : ""}` }
  );
  return styleCreator(props);
};

export function AbstractSwitchBase<T extends SwitchBaseMuiProps>(
  props: AbstractSwitchBaseProps<T>
) {
  const {
    "aria-describedby": describedBy,
    Component,
    "data-id": dataId,
    id,
    muiProps,
    ...others
  } = props;
  const switchBaseClasses = useSwitchBaseStyles(props);

  const calcDataId = dataId || id;

  return (
    <Component
      inputProps={{
        "aria-describedby": describedBy,
        ...(muiProps && muiProps.inputProps),
      }}
      classes={switchBaseClasses}
      data-id={calcDataId}
      id={id}
      {...others}
      {...muiProps}
    />
  );
}
