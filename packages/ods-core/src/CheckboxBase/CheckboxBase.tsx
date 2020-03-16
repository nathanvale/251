import React from "react";
import MuiCheckbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@material-ui/icons/CheckBoxSharp";
import { CheckboxProps as MuiCheckboxProps } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon/SvgIcon";
import { BaseInputProps } from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";

export interface CheckboxBaseProps extends BaseInputProps {
  checked?: boolean;
  error?: boolean;
  "aria-describedby"?: string;
  muiProps?: MuiCheckboxProps;
}

const iconBaseStyle = {
  border: "none",
  boxShadow: "none",
};

const useUnheckedStyle = makeStyles({
  root: {
    ...iconBaseStyle,
  },
});

const UncheckedIcon = ({
  disabled,
  error,
  ...others
}: SvgIconProps & { disabled?: boolean; error?: boolean }) => {
  const classes = useUnheckedStyle();

  return (
    <CheckBoxOutlineBlankSharpIcon
      {...others}
      classes={classes}
      color={disabled ? "disabled" : error ? "error" : "inherit"}
    />
  );
};

const useCheckedStyle = makeStyles({
  root: {
    ...iconBaseStyle,
  },
});

const CheckedIcon = ({
  disabled,
  ...others
}: SvgIconProps & { disabled?: boolean }) => {
  const classes = useCheckedStyle();

  return (
    <CheckBoxSharpIcon
      {...others}
      classes={classes}
      color={disabled ? "disabled" : "inherit"}
    />
  );
};

const useCheckboxStyle = makeStyles({
  root: {
    border: "none",
    boxShadow: "none",
    alignItems: "flex-start",
    "&&:hover": {
      boxShadow: "none",
    },
  },
});

export const CheckboxBase = (props: CheckboxBaseProps) => {
  const {
    disabled,
    error,
    "aria-describedby": describedBy,
    muiProps,
    ...other
  } = props;
  const chkClasses = useCheckboxStyle();

  return (
    <MuiCheckbox
      {...muiProps}
      {...other}
      inputProps={{
        ...(muiProps && muiProps.inputProps),
        "aria-describedby": describedBy,
      }}
      disabled={disabled}
      checkedIcon={<CheckedIcon disabled={disabled} />}
      icon={<UncheckedIcon disabled={disabled} error={error} />}
      classes={chkClasses}
    />
  );
};

CheckboxBase.displayName = "CheckboxBase";
CheckboxBase.defaultProps = {
  "data-id": "checkboxBase",
};
