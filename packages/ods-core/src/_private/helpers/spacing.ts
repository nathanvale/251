import {SpaceVariants, BreakpointVariants} from '@origin-digital/ods-themes';
import {ResponsiveValue} from 'styled-system';
import {ResponsiveProp} from '../../Box/Box';

const spacingAliasToIndex: Record<SpaceVariants, number> = {
  none: 0,
  xxsmall: 1,
  xsmall: 2,
  small: 3,
  medium: 4,
  large: 5,
  xlarge: 6,
  xxlarge: 7,
  xxxlarge: 8,
};

/**
 * Maps originui ResponsiveProp<T> to styled-system ResponsiveValue<T>
 * @param space
 */
export const normaliseResponsiveProp = <T>(
  space?: ResponsiveProp<T>,
): ResponsiveValue<T> | undefined => {
  if (typeof space === 'string') {
    return space;
  }
  if (space instanceof Array) {
    const {length} = space;
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

export const mapSpaceAliasToIndex = (
  space: ResponsiveProp<SpaceVariants>,
  isNegative?: boolean,
) => {
  const sign = isNegative ? -1 : 1;
  if (space instanceof Array) {
    return space.map(alias =>
      alias ? spacingAliasToIndex[alias] * sign : null,
    );
  } else if (typeof space === 'string') {
    return spacingAliasToIndex[space] * sign;
  } else if (space instanceof Object) {
    const obj: Partial<Record<BreakpointVariants, number>> = {};
    Object.keys(space).forEach(alias => {
      const value = space[alias as BreakpointVariants];
      obj[alias as BreakpointVariants] = spacingAliasToIndex[value!] * sign;
    });
    return obj;
  }
  return undefined;
};
