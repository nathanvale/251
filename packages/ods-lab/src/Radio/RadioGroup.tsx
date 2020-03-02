import * as React from "react";
import MuiRadioGroup, {
  RadioGroupProps as IRadioGroup,
} from "@material-ui/core/RadioGroup";

export interface RadioGroupProps extends IRadioGroup {
  "data-id"?: string;
}

export const RadioGroup = (props: RadioGroupProps) => (
  <MuiRadioGroup {...props}>{props.children}</MuiRadioGroup>
);
