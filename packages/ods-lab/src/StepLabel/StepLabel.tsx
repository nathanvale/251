import * as React from "react";
import MuiStepLabel, {
  StepLabelProps as IStepLabel,
} from "@material-ui/core/StepLabel";

export interface StepLabelProps extends IStepLabel {}

export const StepLabel = (props: StepLabelProps) => (
  <MuiStepLabel {...props}>{props.children}</MuiStepLabel>
);
