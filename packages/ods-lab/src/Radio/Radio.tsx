import React from "react";
import {RadioProps as IRadio} from "@material-ui/core/Radio";
import MuiRadioGroup, {RadioGroupProps} from "@material-ui/core/RadioGroup";
import {FormLabel, FormControl, RadioBase} from "..";

export interface IRadioProps extends IRadio {
  label: string;
  value: number | string;
  description?: string;
  error?: boolean;
  border?: boolean;
  helpText?: string | React.ReactNode;
  labelPlacement?: "start" | "end";
}

export interface RadioProps extends Array<IRadioProps>, RadioGroupProps {
  "data-id"?: string;
  label: string;
  radios: IRadioProps[];
}

export const Radio = (props: RadioProps) => {
  return (
    <FormControl component="fieldset" data-id={props["data-id"]}>
      <FormLabel component="legend">{props.label}</FormLabel>
      <MuiRadioGroup
        aria-label={props.label}
        onChange={props.onChange}
        value={props.value}
        defaultValue={props.defaultValue}
      >
        {props.radios.map(r => (
          <RadioBase
            error={r.error}
            key={r.value}
            data-id={props["data-id"]}
            disabled={r.disabled}
            checked={r.value === props.value}
            value={r.value}
            color={r.color}
            labelPlacement={r.labelPlacement}
            label={r.label}
            description={r.description}
            border={r.border}
            helpText={r.helpText}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};
