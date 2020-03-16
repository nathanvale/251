import { Theme } from "@material-ui/core";
import { odsMasterTheme } from "../../odsMasterTheme";

function str2Num(bpValue?: string) {
  return Number((bpValue || "").split("px")[0]);
}

export const breakpoints: Partial<Theme["breakpoints"]> = {
  values: {
    xs: 0,
    sm: str2Num(odsMasterTheme.breakpoints.sm),
    md: str2Num(odsMasterTheme.breakpoints.md),
    lg: str2Num(odsMasterTheme.breakpoints.lg),
    xl: str2Num(odsMasterTheme.breakpoints.xl),
  },
};
