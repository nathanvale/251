import React from "react";
import { makeStyles } from "@material-ui/core";
import { FormControlLabel } from "../../../FormControlLabel/FormControlLabel";
import { FormHelperText } from "../../../FormHelperText/FormHelperText";
import { Box } from "../../../Box/Box";
import { AbstractSwitchProps, SwitchMuiProps } from "./abstract-types";

const getId = (baseId: string, compName: string = "") =>
  `${baseId}-${compName}`;
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

export function AbstractSwitch<
  CompMuiProps,
  MuiProps extends SwitchMuiProps<CompMuiProps>
>(props: AbstractSwitchProps<CompMuiProps, MuiProps>) {
  const {
    Component,
    id,
    "data-id": dataId,
    disabled,
    checked,
    label,
    helperText,
    muiProps,
    ...others
  } = props;
  const lblClasses = useLabelStyles();
  const hlpClasses = useHelperTextStyles();

  return (
    <Box>
      <FormControlLabel
        muiProps={muiProps && muiProps.formControlLabelProps}
        id={`${id}-label`}
        data-id={dataId || id}
        disabled={disabled}
        label={label}
        className={lblClasses.root}
        control={
          <Component
            {...others}
            muiProps={muiProps && muiProps.componentProps}
            aria-describedby={getHelperId(id)}
            id={id}
            checked={checked}
            disabled={disabled}
            data-id={getId(dataId || id, Component.displayName)}
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
    </Box>
  );
}
