import React from "react";
import {
  FormControlState,
  makeStyles,
  useFormControl,
} from "@material-ui/core";
import { kebabCase } from "@origin-digital/ods-helpers";
import { FormControlLabel } from "../../../FormControlLabel/FormControlLabel";
import { FormHelperText } from "../../../FormHelperText/FormHelperText";
import { Box } from "../../../Box/Box";
import { AbstractSwitchProps, SwitchMuiProps } from "./abstract-types";

const getId = (baseId: string, compName: string = "") =>
  `${baseId}-${kebabCase(compName ?? "")}`;
const getHelperId = (baseId: string) => `${baseId}-helper-text`;

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

const useLabelStyles = makeStyles(
  {
    formControlLabel: {
      alignItems: "flex-start",
      marginLeft: "-10px",
    },
    switchComp: {
      marginTop: "-8px",
    },
  },
  { classNamePrefix: `AbstractSwitch` }
);

const useHelperTextStyles = makeStyles(
  {
    formHelperText: {
      paddingLeft: "30px",
      marginTop: "-5px",
      paddingBottom: "5px",
    },
  },
  { classNamePrefix: `AbstractSwitch` }
);

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
  const baseDataId = dataId || id;
  return (
    <Box>
      <FormControlLabel
        className={lblClasses.formControlLabel}
        data-id={`${baseDataId}-label`}
        disabled={disabledVal}
        id={`${id}-label`}
        label={label}
        control={
          <Component
            aria-describedby={getHelperId(id)}
            checked={checked}
            data-id={getId(baseDataId, Component.displayName)}
            disabled={disabledVal}
            error={error || !!fcs.error}
            id={id}
            className={lblClasses.switchComp}
            {...others}
            muiProps={muiProps?.componentProps}
          />
        }
        muiProps={muiProps?.formControlLabelProps}
      />
      {helperText ? (
        <FormHelperText
          className={hlpClasses.formHelperText}
          id={getHelperId(id)}
          data-id={getHelperId(baseDataId)}
          disabled={disabledVal}
          error={false}
          muiProps={muiProps?.formHelperTextProps}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </Box>
  );
}
