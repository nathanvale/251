/* eslint-disable react/prop-types */
import React, { AllHTMLAttributes } from "react";
import styled, { StyledComponentClass } from "styled-components";
import {
  TransitionVariants,
  TransformVariants,
  ColorVariants,
  ResponsiveProp,
  AlignItemsVariants,
  FlexDirectionVariants,
  JustifyContentVariants,
  DisplayVariants,
  TLength,
  TextAlignVariants,
  SpaceVariants,
} from "@origin-digital/ods-types";
import * as CSS from "csstype";
import { Omit } from "utility-types";
import { normaliseResponsiveProp } from "@origin-digital/ods-helpers";
import {
  StyledSystemProps,
  BoxShadowVariant,
  StyledSystemBox,
} from "../_private/components/StyledSystemBox/StyledSystemBox";

export type ResponsiveSpace = ResponsiveProp<SpaceVariants>;

export interface BoxProps
  extends Omit<
    AllHTMLAttributes<HTMLElement>,
    | "width"
    | "height"
    | "suppressContentEditableWarning"
    | "suppressHydrationWarning"
  > {
  alignItems?: ResponsiveProp<AlignItemsVariants>;
  alignSelf?: ResponsiveProp<AlignItemsVariants>;
  backgroundColor?: ResponsiveProp<ColorVariants>;
  component?: React.ReactType;
  display?: ResponsiveProp<DisplayVariants>;
  flexDirection?: ResponsiveProp<FlexDirectionVariants>;
  justifyContent?: ResponsiveProp<JustifyContentVariants>;
  padding?: ResponsiveSpace;
  paddingX?: ResponsiveSpace;
  paddingY?: ResponsiveSpace;
  paddingTop?: ResponsiveSpace;
  paddingBottom?: ResponsiveSpace;
  paddingLeft?: ResponsiveSpace;
  paddingRight?: ResponsiveSpace;
  position?: ResponsiveProp<CSS.PositionProperty>;
  margin?: ResponsiveSpace;
  marginX?: ResponsiveSpace;
  marginY?: ResponsiveSpace;
  marginTop?: ResponsiveSpace;
  marginBottom?: ResponsiveSpace;
  marginLeft?: ResponsiveSpace;
  marginRight?: ResponsiveSpace;
  textAlign?: ResponsiveProp<TextAlignVariants>;
  boxShadow?: BoxShadowVariant;
  height?: "full";
  pointerEvents?: CSS.PointerEventsProperty;
  showAnts?: boolean;
  transform?: TransformVariants;
  transition?: TransitionVariants;
  width?: "full";
  cursor?: CSS.CursorProperty;
  overflow?: "auto" | "hidden" | "visible" | "scroll";
}

export const StyledCodeReset = styled(StyledSystemBox.withComponent("code"))<
  BoxProps
>``;

export const StyledPreReset = styled(StyledSystemBox.withComponent("pre"))<
  BoxProps
>`
  overflow-x: auto;
  word-wrap: break-word;
  overflow-y: hidden;
`;

export const StyledSpanReset = styled(StyledSystemBox.withComponent("span"))<
  BoxProps
>``;

export const StyledAReset = styled(StyledSystemBox.withComponent("a"))<
  BoxProps
>`
  text-decoration: none;
  color: inherit;
`;

export const StyledButtonReset = styled(
  StyledSystemBox.withComponent("button")
)<BoxProps>`
  background: none;
  text-decoration: none;
  color: inherit;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
    cursor: default;
  }
`;

export const Box = ({
  alignItems,
  alignSelf,
  backgroundColor,
  children,
  component,
  display,
  flexDirection,
  justifyContent,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  position,
  textAlign,
  ...rest
}: BoxProps) => {
  let pL = paddingLeft;
  let pR = paddingRight;
  let pT = paddingTop;
  let pB = paddingBottom;
  let mL = marginLeft;
  let mR = marginRight;
  let mT = marginTop;
  let mB = marginBottom;

  if (paddingX) {
    pL = paddingX;
    pR = paddingX;
  }
  if (paddingY) {
    pT = paddingY;
    pB = paddingY;
  }
  if (marginX) {
    mL = marginX;
    mR = marginX;
  }
  if (marginY) {
    mT = marginY;
    mB = marginY;
  }

  let Container: StyledComponentClass<StyledSystemProps, {}>;
  if (component === "a") {
    Container = StyledAReset;
  } else if (component === "code") {
    Container = StyledCodeReset;
  } else if (component === "pre") {
    Container = StyledPreReset;
  } else if (component === "span") {
    Container = StyledSpanReset;
  } else if (component === "button") {
    Container = StyledButtonReset;
  } else {
    Container = StyledSystemBox;
  }

  const styledSystemProps = {
    alignItems: normaliseResponsiveProp<AlignItemsVariants>(alignItems),
    alignSelf: normaliseResponsiveProp<AlignItemsVariants>(alignSelf),
    backgroundColor: normaliseResponsiveProp<ColorVariants>(backgroundColor),
    display: normaliseResponsiveProp<DisplayVariants>(display),
    flexDirection: normaliseResponsiveProp<FlexDirectionVariants>(
      flexDirection
    ),
    justifyContent: normaliseResponsiveProp<JustifyContentVariants>(
      justifyContent
    ),
    padding: normaliseResponsiveProp<CSS.PaddingProperty<TLength>>(padding),
    paddingLeft: normaliseResponsiveProp<CSS.PaddingLeftProperty<TLength>>(pL),
    paddingRight: normaliseResponsiveProp<CSS.PaddingRightProperty<TLength>>(
      pR
    ),
    paddingTop: normaliseResponsiveProp<CSS.PaddingTopProperty<TLength>>(pT),
    paddingBottom: normaliseResponsiveProp<CSS.PaddingBottomProperty<TLength>>(
      pB
    ),
    position: normaliseResponsiveProp<CSS.PositionProperty>(position),
    margin: normaliseResponsiveProp<CSS.MarginProperty<TLength>>(margin),
    marginLeft: normaliseResponsiveProp<CSS.MarginLeftProperty<TLength>>(mL),
    marginRight: normaliseResponsiveProp<CSS.MarginRightProperty<TLength>>(mR),
    marginTop: normaliseResponsiveProp<CSS.MarginTopProperty<TLength>>(mT),
    marginBottom: normaliseResponsiveProp<CSS.MarginBottomProperty<TLength>>(
      mB
    ),
    textAlign: normaliseResponsiveProp<CSS.TextAlignProperty>(textAlign),
  };

  return (
    <Container {...styledSystemProps} {...rest}>
      {children}
    </Container>
  );
};

Box.displayName = "Box";
