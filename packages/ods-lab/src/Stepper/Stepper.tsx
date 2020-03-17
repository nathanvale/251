import * as React from "react";
import MuiStepper, {
  StepperProps as IStepper,
} from "@material-ui/core/Stepper";

export interface StepperProps extends IStepper {}

export const Stepper = (props: StepperProps) => (
  <MuiStepper {...props}>{props.children}</MuiStepper>
);
