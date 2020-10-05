import React from "react";
import {
  FormControlState,
  makeStyles,
  useFormControl,
} from "@material-ui/core";
import { AbstractSwitchProps, SwitchMuiProps } from "@origin-digital/ods-types";
import { kebabCase } from "@origin-digital/ods-helpers";
import { FormControlLabel } from "../../../FormControlLabel/FormControlLabel";
import { FormHelperText } from "../../../FormHelperText/FormHelperText";
import { Box } from "../../../Box/Box";

const getId = (baseId: string, compName: string = "") =>
  `${baseId}-${kebabCase(compName ?? "")}`;
const getHelperId = (baseId: string) => `${baseId}-helper-text`;

/**
 * This allows our Switch components to be sensitive to a FormControl context surrounding them.
 * If the FormControl (ControlGroup) is in error state, all Checkboxes or Radios inside it show up in error state.
 * @param props
 * @param muiFormControl
 * @param states
 */
function formControlState({
  props,
  muiFormControl,
  states,
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
      marginLeft: "-11px",
      paddingTop: "9px",
    },
    switchComp: {
      marginTop: "-9px",
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
    muiFormControl: muiFormControl!,
    states: ["disabled", "error"],
  }) as FormControlState;

  const disabledVal = disabled || !!fcs.disabled;
  const baseDataId = dataId || id;
  return (
    <Box data-id={baseDataId}>
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
            error={error || !!fcs.error ? true : undefined}
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
