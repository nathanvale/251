import {
  css,
  // FlattenInterpolation,
  // Interpolation,
  // SimpleInterpolation,
  ThemedStyledProps,
  // ThemedCssFunction,
  InterpolationFunction,
  SimpleInterpolation,
} from "styled-components";

import { BreakpointVariants } from "@origin-digital/ods-types";

enum MediaLabels {
  xs = "smaller",
  sm = "phone",
  md = "tablet",
  lg = "desktop",
  xl = "giant",
}

enum MediaAliases {
  smaller = "xs",
  phone = "sm",
  tablet = "md",
  desktop = "lg",
  giant = "xl",
}

type Media = MediaLabels | MediaAliases;

// export type MediaTagFunction<
//   P extends {} = {},
//   T extends {} = {}
// > = (
//   strings: TemplateStringsArray | NonNullable<SimpleInterpolation>,
//   ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]
// ) => FlattenInterpolation<ThemedStyledProps<P, T>>;

type MapMediaToQuery = { [Key in Media]: InterpolationFunction<any> };

type MediaObject = MapMediaToQuery & {
  min: MapMediaToQuery;
  max: MapMediaToQuery;
};

type GetBreakpointsFn = <P extends {} = {}>(
  props: ThemedStyledProps<P, {}>
) => Record<BreakpointVariants, number>;

const defaultBreakpoints: Record<BreakpointVariants, number> = {
  xs: 575,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const getBreakpoints: GetBreakpointsFn = () => ({
  ...defaultBreakpoints,
});

export const media: MediaObject = (Object.keys(
  defaultBreakpoints
) as Media[]).reduce(
  (accumulator, label) => {
    const minMedia = (
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (min-width: ${(props) =>
          (getBreakpoints(props) as any)[label]}px) {
        ${css(strings, ...interpolations)}
      }
    `;

    const maxMedia = (
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${(props) =>
          (getBreakpoints(props) as any)[label]}px) {
        ${css(strings, ...interpolations)}
      }
    `;

    accumulator[label] =
      label === "xs" || label === "smaller" ? maxMedia : minMedia;
    accumulator.max[label] = maxMedia;
    accumulator.min[label] = minMedia;

    return accumulator;
  },
  { min: {}, max: {} } as MediaObject
);
