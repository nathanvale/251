import React from "react";
import {
  FormControlState,
  makeStyles,
  useFormControl,
  Theme,
} from "@material-ui/core";
import { FormControlLabel } from "../../../FormControlLabel/FormControlLabel";
import { FormHelperText } from "../../../FormHelperText/FormHelperText";
import { Box } from "../../../Box/Box";
import { AbstractSwitchProps, SwitchMuiProps } from "./abstract-types";

const getId = (baseId: string, compName: string = "") =>
  `${baseId}-${compName}`;
const getHelperId = (baseId: string) => `${baseId}-helperText`;

/**
 * This allows our Switch components to be sensitive to a FormControl context surrounding them.
 * If the FormControl (ControlGroup) is in error state, all Checkboxes or Radios inside it show up in error state.
 * @param props
 * @param states
 * @param muiFormControl
 */
function formControlState({
  props,
  states,
  muiFormControl,
}: {
  props: any;
  muiFormControl: FormControlState;
  states: Array<keyof FormControlState>;
}) {
  return states.reduce(
    (acc: FormControlState, state: keyof FormControlState) => {
      // @ts-ignore
      acc[state] = props[state];

      if (muiFormControl) {
        if (typeof props[state] === "undefined") {
          // @ts-ignore
          acc[state] = muiFormControl[state];
        }
      }

      return acc;
    },
    {} as FormControlState
  );
}

const useLabelStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    "& .MuiFormControlLabel-label": {
      padding: "12px 0",
    },
  },
});

const useHelperTextStyles = makeStyles((theme: Theme) => ({
  inlineHelper: {
    paddingLeft: "29px",
    marginTop: "-5px",
    paddingBottom: "5px",
    color: theme.palette.grey[400],
  },
}));

export function AbstractSwitch<
  CompMuiProps,
  MuiProps extends SwitchMuiProps<CompMuiProps>
>(props: AbstractSwitchProps<CompMuiProps, MuiProps>) {
  const {
    Component,
    id,
    "data-id": dataId,
    checked,
    disabled,
    error,
    helperText,
    label,
    muiProps,
    ...others
  } = props;
  const lblClasses = useLabelStyles();
  const hlpClasses = useHelperTextStyles();

  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["disabled", "error"], // TODO: see if we need to support the whole list of FormControlState keys.
  }) as FormControlState;

  const disabledVal = disabled || !!fcs.disabled;
  return (
    <Box>
      <FormControlLabel
        className={lblClasses.root}
        data-id={dataId || id}
        disabled={disabledVal}
        id={`${id}-label`}
        label={label}
        muiProps={muiProps && muiProps.formControlLabelProps}
        control={
          <Component
            {...others}
            aria-describedby={getHelperId(id)}
            checked={checked}
            data-id={getId(dataId || id, Component.displayName)}
            disabled={disabledVal}
            error={error || !!fcs.error}
            id={id}
            muiProps={muiProps && muiProps.componentProps}
          />
        }
      />
      {helperText ? (
        <FormHelperText
          className={hlpClasses.inlineHelper}
          id={getHelperId(id)}
          data-id={getHelperId(dataId || id)}
          disabled={disabledVal}
          error={false}
          muiProps={muiProps && muiProps.formHelperTextProps}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </Box>
  );
}
