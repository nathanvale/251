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
