import * as React from "react";
import MuiStep, { StepProps as IStep } from "@material-ui/core/Step";

export interface StepProps extends IStep {}

export const Step = (props: StepProps) => (
  <MuiStep {...props}>{props.children}</MuiStep>
);
