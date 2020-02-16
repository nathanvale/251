import {
  css,
  // FlattenInterpolation,
  // Interpolation,
  // SimpleInterpolation,
  ThemedStyledProps,
  DefaultTheme,
  // ThemedCssFunction,
  InterpolationFunction,
  SimpleInterpolation,
} from "styled-components";

import {BreakpointVariants} from "@origin-digital/ods-themes";

export enum MediaLabels {
  xs = "smaller",
  sm = "phone",
  md = "tablet",
  lg = "desktop",
  xl = "giant",
}

export enum MediaAliases {
  smaller = "xs",
  phone = "sm",
  tablet = "md",
  desktop = "lg",
  giant = "xl",
}

export type Media = MediaLabels | MediaAliases;

// export type MediaTagFunction<
//   P extends {} = {},
//   T extends DefaultTheme = DefaultTheme
// > = (
//   strings: TemplateStringsArray | NonNullable<SimpleInterpolation>,
//   ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]
// ) => FlattenInterpolation<ThemedStyledProps<P, T>>;

export type MapMediaToQuery = {[Key in Media]: InterpolationFunction<any>};

export type MediaObject = MapMediaToQuery & {
  min: MapMediaToQuery;
  max: MapMediaToQuery;
};

export type GetBreakpointsFn = <P extends {} = {}>(
  props: ThemedStyledProps<P, DefaultTheme>,
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
  defaultBreakpoints,
) as Media[]).reduce(
  (accumulator, label) => {
    const minMedia = (
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (min-width: ${props => (getBreakpoints(props) as any)[label]}px) {
        ${css(strings, ...interpolations)}
      }
    `;

    const maxMedia = (
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${props => (getBreakpoints(props) as any)[label]}px) {
        ${css(strings, ...interpolations)}
      }
    `;

    accumulator[label] =
      label === "xs" || label === "smaller" ? maxMedia : minMedia;
    accumulator.max[label] = maxMedia;
    accumulator.min[label] = minMedia;

    return accumulator;
  },
  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  {min: {}, max: {}} as MediaObject,
);
