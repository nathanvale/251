import {
  SpaceVariants,
  BreakpointVariants,
  ResponsiveProp,
} from "@origin-digital/ods-types";

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

export interface MapSpaceAliasToIndexProps {
  space: ResponsiveProp<SpaceVariants>;
  isNegative?: boolean;
}

export const mapSpaceAliasToIndex = ({
  space,
  isNegative,
}: MapSpaceAliasToIndexProps) => {
  const sign = isNegative ? -1 : 1;
  if (space instanceof Array) {
    return space.map(alias =>
      alias ? spacingAliasToIndex[alias] * sign : null,
    );
  } else if (typeof space === "string") {
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
