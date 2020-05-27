import { ResponsiveProp } from "@origin-digital/ods-types";
import { ResponsiveValue } from "styled-system";
import { mapToStyledSystem } from "./mapToStyledSystem";

export const normaliseObjectResponsiveProp = <
  Keys extends string | number | boolean
>(
  value?: ResponsiveProp<Keys>
): ResponsiveValue<Keys> | undefined => {
  const normArr: ResponsiveValue<Keys> = mapToStyledSystem<Keys>(value) ?? [];
  if (typeof normArr === "string" || typeof normArr === "number") {
    return {
      xs: normArr,
      sm: normArr,
      md: normArr,
      lg: normArr,
      xl: normArr,
    };
  } else if (normArr instanceof Array && normArr.length === 5) {
    return {
      xs: normArr[0] as Keys,
      sm: normArr[1] as Keys,
      md: normArr[2] as Keys,
      lg: normArr[3] as Keys,
      xl: normArr[4] as Keys,
    };
  }
  throw new Error(`Invalid responsive prop: ${JSON.stringify(value)}`);
};
