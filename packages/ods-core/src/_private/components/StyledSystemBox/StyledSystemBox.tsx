import * as CSS from "csstype";
import styled, { css } from "styled-components";

import {
  TransitionVariants,
  TransformVariants,
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
            border: 1px dashed ${theme.colors.grey200};
          `}

          ${({ theme, transition }) =>
            transition &&
            css`
              transition: ${theme.transitions[transition]};
            `}
       `;
