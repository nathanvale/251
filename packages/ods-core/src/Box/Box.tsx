/* eslint-disable react/prop-types */
import { AllHTMLAttributes, createElement, ElementType } from "react";
import styled, { StyledComponentClass } from "styled-components";
import {
  AlignItemsVariants,
  BackgroundColorVariants,
  DisplayVariants,
  FlexDirectionVariants,
  FlexWrapVariants,
  JustifyContentVariants,
  ResponsiveProp,
  ResponsiveSpace,
  TextAlignVariants,
  TLength,
  TransformVariants,
  TransitionVariants,
} from "@origin-digital/ods-types";
import * as CSS from "csstype";
import { Omit } from "utility-types";
import { mapToStyledSystem } from "@origin-digital/ods-helpers";
import {
  BoxShadowVariant,
  StyledSystemBox,
  StyledSystemProps,
} from "../_private/components/StyledSystemBox/StyledSystemBox";
import { renderBackgroundProvider } from "./BackgroundContext";

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
  backgroundColor?: BackgroundColorVariants;
  component?: ElementType;
  display?: ResponsiveProp<DisplayVariants>;
  flexDirection?: ResponsiveProp<FlexDirectionVariants>;
  flexWrap?: ResponsiveProp<FlexWrapVariants>;
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
  innerRef?: any;
}

export const StyledCodeReset = styled(StyledSystemBox.withComponent("code"))<
  BoxProps
>``;

export const StyledPreReset = styled(StyledSystemBox.withComponent("pre"))<
  BoxProps
>`
  word-wrap: break-word;
  overflow: visible;
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

export const StyledPReset = styled(StyledSystemBox.withComponent("p"))<
  BoxProps
>`
  margin: 0;
`;

export const StyledH1Reset = styled(StyledSystemBox.withComponent("h1"))<
  BoxProps
>``;

export const StyledH2Reset = styled(StyledSystemBox.withComponent("h2"))<
  BoxProps
>``;

export const StyledH3Reset = styled(StyledSystemBox.withComponent("h3"))<
  BoxProps
>``;

export const StyledH4Reset = styled(StyledSystemBox.withComponent("h4"))<
  BoxProps
>``;

export const StyledH5Reset = styled(StyledSystemBox.withComponent("h5"))<
  BoxProps
>``;

export const StyledH6Reset = styled(StyledSystemBox.withComponent("h6"))<
  BoxProps
>``;

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
  component,
  display,
  flexDirection,
  flexWrap,
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
  } else if (component === "p") {
    Container = StyledPReset;
  } else if (component === "button") {
    Container = StyledButtonReset;
  } else if (component === "h1") {
    Container = StyledH1Reset;
  } else if (component === "h2") {
    Container = StyledH2Reset;
  } else if (component === "h3") {
    Container = StyledH3Reset;
  } else if (component === "h4") {
    Container = StyledH4Reset;
  } else if (component === "h5") {
    Container = StyledH5Reset;
  } else if (component === "h6") {
    Container = StyledH6Reset;
  } else {
    Container = StyledSystemBox;
  }

  const styledSystemProps = {
    alignItems: mapToStyledSystem<AlignItemsVariants>(alignItems),
    alignSelf: mapToStyledSystem<AlignItemsVariants>(alignSelf),
    backgroundColor,
    display: mapToStyledSystem<DisplayVariants>(display),
    flexDirection: mapToStyledSystem<FlexDirectionVariants>(flexDirection),
    flexWrap: mapToStyledSystem<FlexWrapVariants>(flexWrap),
    justifyContent: mapToStyledSystem<JustifyContentVariants>(justifyContent),
    padding: mapToStyledSystem<CSS.PaddingProperty<TLength>>(padding),
    paddingLeft: mapToStyledSystem<CSS.PaddingLeftProperty<TLength>>(pL),
    paddingRight: mapToStyledSystem<CSS.PaddingRightProperty<TLength>>(pR),
    paddingTop: mapToStyledSystem<CSS.PaddingTopProperty<TLength>>(pT),
    paddingBottom: mapToStyledSystem<CSS.PaddingBottomProperty<TLength>>(pB),
    position: mapToStyledSystem<CSS.PositionProperty>(position),
    margin: mapToStyledSystem<CSS.MarginProperty<TLength>>(margin),
    marginLeft: mapToStyledSystem<CSS.MarginLeftProperty<TLength>>(mL),
    marginRight: mapToStyledSystem<CSS.MarginRightProperty<TLength>>(mR),
    marginTop: mapToStyledSystem<CSS.MarginTopProperty<TLength>>(mT),
    marginBottom: mapToStyledSystem<CSS.MarginBottomProperty<TLength>>(mB),
    textAlign: mapToStyledSystem<CSS.TextAlignProperty>(textAlign),
  };
  const element = createElement(Container, {
    ...styledSystemProps,
    ...rest,
  });
  return renderBackgroundProvider(element, backgroundColor);
};

Box.displayName = "Box";
