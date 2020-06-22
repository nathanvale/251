import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";
import { BaseFieldProps, TextFieldBase } from "../TextFieldBase/TextFieldBase";

export type OptionType = {
  value: string;
  label: string;
};

export interface SelectFieldProps extends Omit<BaseFieldProps, "placeholder"> {
  children?:
    | React.ReactElement<"option" | "optgroup">
    | React.ReactElement<"option" | "optgroup">[];
  displayEmpty?: boolean;
  domProps?: React.HTMLAttributes<HTMLInputElement>;
  emptyAriaLabel?: string;
  options?: OptionType[];
}

const IconExpandMore = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </SvgIcon>
);

export const SelectField = ({
  children,
  disabled,
  displayEmpty,
  emptyAriaLabel = "None",
  error,
  options,
  ...rest
}: SelectFieldProps) => {
  return (
    <TextFieldBase
      {...rest}
      select={true}
      SelectProps={{
        IconComponent: IconExpandMore,
      }}
      disabled={disabled}
      error={error}
    >
      {displayEmpty && <option aria-label={emptyAriaLabel} value="" />}
      {options
        ? options.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))
        : children}
    </TextFieldBase>
  );
};

SelectField.displayName = "SelectField";
SelectField.defaultProps = {
  variant: "filled",
  size: "medium",
  emptyAriaLabel: "None",
};
