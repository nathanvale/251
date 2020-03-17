import * as React from "react";
import MuiStepContent, {
  StepContentProps as IStepContent,
} from "@material-ui/core/StepContent";

export interface StepContentProps extends IStepContent {}

export const StepContent = (props: StepContentProps) => (
  <MuiStepContent {...props}>{props.children}</MuiStepContent>
);
