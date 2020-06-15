import React from "react";
import {
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
} from "@material-ui/core";
import {
  BaseInputProps,
  TextFieldVariant,
  TextFieldSize,
} from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";

export interface TextFieldBaseProps extends Omit<BaseInputProps, "focused"> {
  defaultValue?: string | number;
  domProps?: React.HTMLAttributes<HTMLInputElement>;
  endAdornment?: React.ReactNode;
  helperText?: string | React.ReactNode;
  label?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: TextFieldSize;
  startAdornment?: React.ReactNode;
  reserveHelperTextSpace?: boolean;
  type?: string;
  variant?: TextFieldVariant;
  muiProps?: MuiTextFieldProps;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderBottomColor: theme.palette.promote.main,
      // When in error, the label should be in disabled colour not palette.error.
      "& .MuiFormLabel-root.Mui-error.Mui-disabled": {
        color: theme.palette.grey[300],
      },
      // When not in error, the label colour should always be our blue (promote)
      "& .MuiFormLabel-root.Mui-focused:not(.Mui-error)": {
        color: theme.palette.promote.main,
      },
      "& .MuiFormLabel-root.Mui-focused.Mui-error": {
        color: theme.palette.error.main,
      },

      /** FilledInput **/
      // We have slightly lighter backgrounds than MUI
      "& .MuiFilledInput-root": {
        backgroundColor: "rgba(80, 80, 80, 0.08)",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      },
      "& .MuiFilledInput-root:hover": {
        backgroundColor: "rgba(80, 80, 80, 0.12)",
      },
      "& .MuiFilledInput-root.Mui-focused": {
        backgroundColor: "rgba(80, 80, 80, 0.20)",
      },
      // When not in error, the colour for border should always be our blue (promote)
      "& .MuiFilledInput-underline:not(.Mui-error):after": {
        borderBottomColor: theme.palette.promote.main,
      },
      // When disabled should show solid borderBottom instead of dotted
      "& .MuiFilledInput-underline.Mui-disabled:before": {
        borderBottomColor: theme.palette.grey[300],
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      },
      // To avoid red borderBottom when both disabled and error (our design differs from MUI).
      "& .MuiFilledInput-underline.Mui-error.Mui-disabled:after": {
        borderBottom: "none",
      },

      /** OutlinedInput **/

      // Outlined, when not in error, the outline colour should always be our blue (promote)
      "& .Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.promote.main,
      },
      // Outlined, when in error, the outline colour should always be our blue (promote)
      "& .Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.main,
      },

      // In MUI TextField, FormHelperText is 2px off (to the right) compared to input and Label, it has margin 14px.
      // We subtract it by 2px so that All 3 are nicely left aligned.
      "& .MuiFormHelperText-root": {
        marginLeft: "12px",
      },
      // When in error, the helper text should be in disabled colour not palette.error.
      "& .MuiFormHelperText-root.Mui-error.Mui-disabled": {
        color: theme.palette.grey[300],
      },
    },
  }),
  { classNamePrefix: "textfield-base" }
);
export const TextFieldBase = ({
  "data-id": dataId,
  domProps,
  endAdornment,
  helperText,
  id,
  muiProps,
  reserveHelperTextSpace,
  startAdornment,
  variant = "filled",
  ...rest
}: TextFieldBaseProps) => {
  const classes = useStyles();

  const calcDataId = dataId || id;
  return (
    <MuiTextField
      {...muiProps}
      {...rest}
      InputProps={{
        ...muiProps?.InputProps,
        startAdornment,
        endAdornment,
      }}
      inputProps={{
        ...muiProps?.inputProps,
        ...domProps,
        "data-id": `${calcDataId}-input`,
      }}
      InputLabelProps={
        {
          ...muiProps?.InputLabelProps,
          "data-id": `${calcDataId}-label`,
        } as any
      }
      FormHelperTextProps={
        {
          ...muiProps?.FormHelperTextProps,
          "data-id": `${calcDataId}-helper-text`,
        } as any
      }
      classes={classes}
      data-id={calcDataId}
      fullWidth={true}
      helperText={helperText || (reserveHelperTextSpace && <div>&nbsp;</div>)}
      id={id}
      required={false}
      variant={variant}
    />
  );
};

TextFieldBase.displayName = "TextFieldBase";
TextFieldBase.defaultProps = {
  variant: "filled",
  size: "medium",
};
