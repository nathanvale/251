import React from "react";

import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from "@material-ui/lab";

import { MuiBasedComponentBaseProps } from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";
import { useControlled } from "@material-ui/core";
import { ToggleButton } from "../ToggleButton/ToggleButton";

export type ToggleButtonWidth = "full" | "content";
export type OptionType = { value: string | number; label: string };
export interface ToggleButtonGroupProps
  extends Omit<MuiBasedComponentBaseProps, "disabled" | "id"> {
  id: string;
  "aria-label"?: string;
  defaultValue?: string | number;
  muiProps?: MuiToggleButtonGroupProps;
  onChange?: (event: React.MouseEvent<HTMLElement>, value: any) => void;
  options?: string[] | OptionType[];
  size?: "small" | "medium";
  value?: string | number;
  width?: ToggleButtonWidth;
}

const defaultProps: Partial<ToggleButtonGroupProps> = {
  width: "full",
};

const useTBGStyles = makeStyles(
  (_theme) => ({
    root: ({ width }: Partial<ToggleButtonGroupProps>) =>
      width === "full"
        ? {
            width: `100%`,
          }
        : {},
    grouped: ({ children, options, width }: Partial<ToggleButtonGroupProps>) =>
      width === "full" &&
      (children || (Array.isArray(options) && options.length))
        ? {
            width: `${
              100 /
              (children ? React.Children.count(children) : options?.length ?? 1)
            }%`,
          }
        : {},
  }),
  { classNamePrefix: "toggle-button-group" }
);

/**
 * If children provided it has precendence over options.
 * If not, render options based on whether it is a string[] or {value, label}[].
 */
const renderChildren = ({
  children,
  classes,
  options,
}: Pick<ToggleButtonGroupProps, "children" | "options" | "classes">) => {
  if (children) {
    return children;
  }
  if (Array.isArray(options) && options.length) {
    if (typeof options[0] === "string") {
      return (options as string[]).map((opt: string) => (
        <ToggleButton
          aria-label={opt}
          className={classes?.grouped}
          key={opt}
          value={opt}
        >
          {opt}
        </ToggleButton>
      ));
    } else if (
      Object.keys(options[0]).includes("value") &&
      Object.keys(options[0]).includes("label")
    ) {
      return (options as OptionType[]).map((opt: OptionType) => (
        <ToggleButton
          aria-label={opt.label}
          className={classes?.grouped}
          key={opt.value}
          value={opt.value}
        >
          {opt.label}
        </ToggleButton>
      ));
    }
    return null;
  }
  return null;
};

export const ToggleButtonGroup = ({
  "aria-label": ariaLabel,
  children,
  "data-id": dataId,
  defaultValue,
  id,
  muiProps,
  onChange,
  options,
  value: valueProp,
  width,
  ...others
}: ToggleButtonGroupProps) => {
  const calcDataId = dataId || id;
  const classes = useTBGStyles({ children, options, width });

  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "ToggleButtonGroup",
    state: "value",
  });

  const childrenToRender = React.useMemo(
    () => renderChildren({ children, classes, options }),
    [children, classes, options]
  );

  // Here we prevent deselceting all elements by not calling onChange if value is null.
  // value === null means the user has clicked the selected toggle.
  const handleChange = React.useMemo(
    () => (event: React.MouseEvent<HTMLElement>, value: any) => {
      if (value !== null) {
        setValue(value);
        onChange?.(event, value);
      }
    },
    [onChange, setValue]
  );
  return (
    <MuiToggleButtonGroup
      classes={classes}
      data-id={calcDataId}
      id={id}
      aria-label={ariaLabel || id}
      exclusive={true}
      onChange={handleChange}
      value={value}
      {...others}
      {...muiProps}
    >
      {childrenToRender}
    </MuiToggleButtonGroup>
  );
};

ToggleButtonGroup.defaultProps = defaultProps;

ToggleButtonGroup.displayName = "ToggleButtonGroup";
