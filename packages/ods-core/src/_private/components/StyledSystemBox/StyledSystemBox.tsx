import * as CSS from "csstype";
import styled, { css } from "styled-components";

import {
  TransitionVariants,
  TransformVariants,
  Theme,
} from "@origin-digital/ods-types";

import {
  textAlign,
  alignItems,
  alignSelf,
  backgroundColor,
  display,
  DisplayProps,
  flexDirection,
  FlexDirectionProps,
  justifyContent,
  JustifyContentProps,
  margin,
  marginBottom,
  marginLeft,
  MarginProps,
  marginRight,
  marginTop,
  padding,
  paddingBottom,
  paddingLeft,
  overflow,
  OverflowProps,
  PaddingProps,
  paddingRight,
  paddingTop,
  position,
  PositionProps,
  BackgroundColorProps,
  style,
} from "styled-system";
import { tint } from "polished";
import { themeChecker } from "@origin-digital/ods-helpers";

export interface StyledSystemProps
  extends DisplayProps,
    PositionProps,
    PaddingProps,
    MarginProps,
    FlexDirectionProps,
    JustifyContentProps,
    BackgroundColorProps,
    OverflowProps {
  boxShadow?: BoxShadowVariant;
  height?: "full";
  pointerEvents?: CSS.PointerEventsProperty;
  showAnts?: boolean;
  transform?: TransformVariants;
  transition?: TransitionVariants;
  width?: "full";
  cursor?: CSS.CursorProperty;
}

export type BoxShadowVariant =
  | "small"
  | "medium"
  | "large"
  | "outlineFocus"
  | "borderStandard"
  | "borderStandardInverted"
  | "borderCritical"
  | "borderFormHover"
  | "borderFormAccent"
  | "borderFormAccentLarge"
  | "borderStandardInvertedLarge"
  | "borderWeakPrimary"
  | "borderWeakSecondary"
  | "borderWeakPrimaryDisabled"
  | "borderWeakSecondaryDisabled";

const pointerEvents = style({
  prop: "pointerEvents",
  cssProperty: "pointerEvents",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const boxShadowFactory = ({
  border,
  shadows,
}: Pick<Theme, "border" | "shadows">) => {
  const { width: borderWidth, color } = border;
  const boxShadowForVariant: Record<BoxShadowVariant, string> = {
    ...shadows,
    outlineFocus: `0 0 0 ${borderWidth.large}px ${color.focus}`,
    borderStandard: `inset 0 0 0 ${borderWidth.standard}px ${color.standard}`,
    borderStandardInverted: `inset 0 0 0 ${borderWidth.standard}px ${color.standardInverted}`,
    borderWeakPrimary: `inset 0 0 0 ${borderWidth.standard}px ${color.primary}`,
    borderWeakSecondary: `inset 0 0 0 ${borderWidth.standard}px ${color.secondary}`,
    borderWeakPrimaryDisabled: `inset 0 0 0 ${borderWidth.standard}px ${tint(
      0.84,
      color.primary,
    )}`,
    borderWeakSecondaryDisabled: `inset 0 0 0 ${borderWidth.standard}px ${tint(
      0.84,
      color.secondary,
    )}`,
    borderCritical: `inset 0 0 0 ${borderWidth.standard}px ${color.critical}`,
    borderFormHover: `inset 0 0 0 ${borderWidth.standard}px ${color.formHover}`,
    borderFormAccent: `inset 0 0 0 ${borderWidth.standard}px ${color.formAccent}`,
    borderFormAccentLarge: `inset 0 0 0 ${borderWidth.large}px ${color.formAccent}`,
    borderStandardInvertedLarge: `inset 0 0 0 ${borderWidth.large}px ${color.standardInverted}`,
  };

  return boxShadowForVariant;
};

export const StyledSystemBox = styled.div<StyledSystemProps>`
        ${themeChecker};
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        ${backgroundColor}
        ${pointerEvents}
        ${display}
        ${flexDirection}
        ${margin}
        ${marginTop}
        ${marginBottom}
        ${marginLeft}
        ${marginRight}
        ${padding}
        ${paddingTop}
        ${paddingBottom}
        ${paddingLeft}
        ${paddingRight}
        ${alignItems}
        ${alignSelf}
        ${justifyContent}
        ${position}
        ${textAlign}
        ${overflow}
        :active {
           transform: ${({ theme, transform }) => theme.transforms[transform!]};
         }
        ${p =>
          p.width === "full" &&
          css`
            width: 100%;
          `}
        ${p => (p.height === "full" ? "height: 100%;" : null)}
        ${({ theme, showAnts }) =>
          showAnts &&
          css`
            border: 1px dashed ${theme.colors.grey24};
          `}

          ${({
            theme,
            boxShadow,
          }: {
            theme: Theme;
            boxShadow?: BoxShadowVariant;
          }) =>
            boxShadow &&
            css`
              box-shadow: ${boxShadowFactory(theme)[boxShadow]};
            `}

          ${({ theme, transition }) =>
            transition &&
            css`
              transition: ${theme.transitions[transition]};
            `}
       `;
