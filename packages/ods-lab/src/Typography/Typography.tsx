import React from "react";
import MuiTypography, {
  TypographyProps as ITypography,
} from "@material-ui/core/Typography";

export interface TypographyProps extends ITypography {
  "data-id"?: string;
}

export const Typography = (props: TypographyProps) => (
  <MuiTypography data-id={props["data-id"]} {...props}>
    {props.children}
  </MuiTypography>
);
