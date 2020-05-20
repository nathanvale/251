import { ResponsiveProp } from "@origin-digital/ods-types";

import { ResponsiveValue } from "styled-system";

/**
 * Maps originui ResponsiveProp<T> to styled-system ResponsiveValue<T>
 * @param space
 */

export const normaliseResponsiveProp = <Keys extends string | number | boolean>(
  space?: ResponsiveProp<Keys>
): ResponsiveValue<Keys> | undefined => {
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

export const normaliseObjectResponsiveProp = <
  Keys extends string | number | boolean
>(
  value?: ResponsiveProp<Keys>
): ResponsiveValue<Keys> | undefined => {
  const normArr: ResponsiveValue<Keys> =
    normaliseResponsiveProp<Keys>(value) ?? [];
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
