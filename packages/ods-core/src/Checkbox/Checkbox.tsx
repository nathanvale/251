import React from "react";
import {
  makeStyles,
  FormControlLabelProps as MuiFormControlLabelProps,
  CheckboxProps as MuiCheckboxProps,
  FormHelperTextProps as MuiFormHelperTextProps,
} from "@material-ui/core";
import { BaseInputProps } from "@origin-digital/ods-types";
import { FormControlLabel } from "../FormControlLabel/FormControlLabel";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import { CheckboxBase } from "../CheckboxBase/CheckboxBase";

interface CheckboxMuiPropsType {
  formControlLabelProps?: MuiFormControlLabelProps;
  checkboxProps?: MuiCheckboxProps;
  formHelperTextProps?: MuiFormHelperTextProps;
}

export interface CheckboxProps extends BaseInputProps {
  label: string;
  checked?: boolean;
  error?: boolean;
  helperText?: string;
  muiProps?: CheckboxMuiPropsType;
}

const getCheckboxBaseId = (baseId: string) => `${baseId}-checkboxBase`;
const getHelperId = (baseId: string) => `${baseId}-helperText`;

const useLabelStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    "& .MuiFormControlLabel-label": {
      padding: "9px 0",
    },
  },
});

const useHelperTextStyles = makeStyles({
  inlineHelper: {
    paddingLeft: "32px",
    marginTop: "-5px",
  },
});

export const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps,
) => {
  const {
    id,
    "data-id": dataId,
    disabled,
    checked,
    label,
    helperText,
    muiProps,
    ...other
  } = props;
  const lblClasses = useLabelStyles();
  const hlpClasses = useHelperTextStyles();

  return (
    <>
      <FormControlLabel
        muiProps={muiProps && muiProps.formControlLabelProps}
        id={`${id}-label`}
        data-id={dataId || id}
        disabled={disabled}
        label={label}
        className={lblClasses.root}
        control={
          <CheckboxBase
            muiProps={muiProps && muiProps.checkboxProps}
            {...other}
            id={`${id}-input`}
            checked={checked}
            disabled={disabled}
            data-id={getCheckboxBaseId(dataId || id)}
          />
        }
      />
      <FormHelperText
        muiProps={muiProps && muiProps.formHelperTextProps}
        className={hlpClasses.inlineHelper}
        id={getHelperId(id)}
        data-id={getHelperId(dataId || id)}
        disabled={disabled}
      >
        {helperText}
      </FormHelperText>
    </>
  );
};

Checkbox.displayName = "Checkbox";
Checkbox.defaultProps = {};
