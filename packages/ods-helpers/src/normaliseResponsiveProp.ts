import { ResponsiveProp } from "@origin-digital/ods-types";

import { ResponsiveValue } from "styled-system";

/**
 * Maps originui ResponsiveProp<T> to styled-system ResponsiveValue<T>
 * @param space
 */

export const normaliseResponsiveProp = <T>(
  space?: ResponsiveProp<T>
): ResponsiveValue<T> | undefined => {
  if (typeof space === "string") {
    return space;
  }
  if (space instanceof Array) {
    const { length } = space;
    if (length === 2) {
      const mobile = space[0];
      const desktop = space[1];
      return [mobile, mobile, mobile, desktop, desktop];
    }
  } else if (space instanceof Object) {
    return [
      space.xs || null,
      space.sm || null,
      space.md || null,
      space.lg || null,
      space.xl || null,
    ];
  } else {
    return space;
  }
  throw new Error(`Invalid responsive prop length: ${JSON.stringify(space)}`);
};

export const normaliseObjectResponsiveProp = <T>(
  value?: ResponsiveProp<T>
): ResponsiveValue<T> | undefined => {
  const normArr: ResponsiveValue<T> = normaliseResponsiveProp<T>(value) ?? [];
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
      xs: normArr[0] as T,
      sm: normArr[1] as T,
      md: normArr[2] as T,
      lg: normArr[3] as T,
      xl: normArr[4] as T,
    };
  }
  throw new Error(`Invalid responsive prop: ${JSON.stringify(value)}`);
};
