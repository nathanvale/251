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
import { useGreyHelperText } from "@origin-digital/ods-typography";

export interface BaseFieldProps
  extends Omit<BaseInputProps, "focused" | "children"> {
  defaultValue?: string | number;
  helperText?: string | React.ReactNode;
  label?: string;
  maxLength?: string | number;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: TextFieldSize;
  hideHelperTextSpace?: boolean;
  type?: string;
  variant?: TextFieldVariant;
  muiProps?: MuiTextFieldProps;
}

export interface TextFieldBaseProps extends BaseFieldProps {
  children?: React.ReactNode;
  domProps?: React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
  endAdornment?: React.ReactNode;
  multiline?: boolean;
  select?: boolean;
  SelectProps?: MuiTextFieldProps["SelectProps"];
  startAdornment?: React.ReactNode;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderBottomColor: theme.palette.info.main,
      // When in error, the label should be in disabled colour not palette.error.
      "& .MuiFormLabel-root.Mui-error.Mui-disabled": {
        color: theme.palette.grey[300],
      },
      // When not in error, the label colour should always be our blue (promote)
      "& .MuiFormLabel-root.Mui-focused:not(.Mui-error)": {
        color: theme.palette.info.main,
      },
      "& .MuiFormLabel-root.Mui-focused.Mui-error": {
        color: theme.palette.error.main,
      },

      /** Fonts must be set to 16px for inputBase. Our fontSize for inputs is bigger than our normal text.
       * That is why we set them to subtitle2 instead of body1.
       * TODO: We need to move to MUI approach for consistency and our inputs have the same fontSize as Text.
       **/
      "& .MuiInputBase-root, & .MuiFormLabel-root": {
        fontSize: theme.typography.subtitle2.fontSize,
      },
      /**
       * To keep the overall height of the component fixed as 56px while increasing the lineHeight of input/select
       * we reduced its paddingTop by 1px (from 27px to 26px) and bumped up the lineHeight to 20px from 19px.
       */
      "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
        height: "auto",
        lineHeight: "24px",
        "&.MuiFilledInput-input": {
          paddingTop: "24px",
          paddingBottom: "8px",
        },
        "&.MuiOutlinedInput-input": {
          paddingTop: "16px",
          paddingBottom: "16px",
        },
        "&.MuiFilledInput-inputMarginDense": {
          paddingTop: "20px",
          paddingBottom: "4px",
        },
        "&.MuiOutlinedInput-inputMarginDense": {
          paddingTop: "12px",
          paddingBottom: "12px",
        },
      },
      "& .MuiInputBase-multiline": {
        //TextFeild paddings are applied on the parent element
        height: "auto",
        lineHeight: "24px",
        "&.MuiFilledInput-root": {
          paddingTop: "24px",
          paddingBottom: "8px",
        },
        "&.MuiOutlinedInput-root": {
          paddingTop: "16px",
          paddingBottom: "16px",
        },
        "&.MuiFilledInput-marginDense": {
          paddingTop: "20px",
          paddingBottom: "4px",
        },
        "&.MuiOutlinedInput-marginDense": {
          paddingTop: "12px",
          paddingBottom: "12px",
        },
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
        backgroundColor: "rgba(80, 80, 80, 0.12)",
      },
      "& .MuiSelect-root:focus": {
        backgroundColor: "rgba(80, 80, 80, 0)",
      },
      // When not in error, the colour for border should always be our blue (promote)
      "& .MuiFilledInput-underline:not(.Mui-error):after": {
        borderBottomColor: theme.palette.info.main,
      },
      "& .MuiInputBase-root.Mui-disabled": {
        backgroundColor: theme.palette.grey[50],
      },
      // When disabled should show solid borderBottom instead of dotted
      "& .MuiFilledInput-underline.Mui-disabled:before": {
        borderBottomColor: theme.palette.grey[200],
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
        borderColor: theme.palette.info.main,
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
  { classNamePrefix: "textfieldbase" }
);
export const TextFieldBase = ({
  "data-id": dataId,
  domProps,
  endAdornment,
  helperText,
  id,
  maxLength,
  muiProps,
  hideHelperTextSpace,
  select,
  SelectProps,
  startAdornment,
  variant = "filled",
  ...rest
}: TextFieldBaseProps) => {
  const classes = useStyles();
  const helperTextClassName = useGreyHelperText();

  const calcDataId = dataId || id;
  return (
    <MuiTextField
      InputProps={{
        startAdornment,
        endAdornment,
        ...muiProps?.InputProps,
      }}
      inputProps={{
        maxLength,
        "data-id": `${calcDataId}-input`,
        ...muiProps?.inputProps,
        ...domProps,
      }}
      InputLabelProps={
        {
          "data-id": `${calcDataId}-label`,
          ...muiProps?.InputLabelProps,
        } as any
      }
      FormHelperTextProps={
        {
          className: helperTextClassName,
          "data-id": `${calcDataId}-helper-text`,
          component: typeof helperText !== "string" ? "div" : undefined,
          ...muiProps?.FormHelperTextProps,
        } as any
      }
      SelectProps={{
        ...(select
          ? {
              native: true,
            }
          : {}),
        ...SelectProps,
        ...muiProps?.SelectProps,
      }}
      classes={classes}
      data-id={calcDataId}
      fullWidth={true}
      helperText={helperText || (!hideHelperTextSpace && <div>&nbsp;</div>)}
      id={id}
      required={false}
      select={select}
      variant={variant}
      {...rest}
      {...muiProps}
    />
  );
};

TextFieldBase.displayName = "TextFieldBase";
TextFieldBase.defaultProps = {
  variant: "filled",
  size: "medium",
};
