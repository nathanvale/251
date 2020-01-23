/* eslint-disable react/prop-types */
import React, {AllHTMLAttributes} from 'react';
import styled, {
  StyledComponentClass,
  DefaultTheme,
  TransitionVariants,
  TransformVariants,
} from 'styled-components';
import * as CSS from 'csstype';
import {Omit} from 'utility-types';

import {
  StyledSystemProps,
  BoxShadowVariant,
  StyledSystemBox,
} from '../_private/components/StyledSystemBox/StyledSystemBox';
import {normaliseResponsiveProp} from '../_private/helpers/spacing';

export type SpaceVariants =
  | 'none'
  | 'small'
  | 'xxsmall'
  | 'xsmall'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';

export type ColorVariants =
  | 'redPink'
  | 'red'
  | 'orange'
  | 'lightOrange'
  | 'lightBlue'
  | 'grey'
  | 'lightGrey'
  | 'blue'
  | 'green'
  | 'lightGreen'
  | 'purple'
  | 'grey4'
  | 'grey8'
  | 'grey16'
  | 'grey24'
  | 'grey48'
  | 'grey80'
  | 'grey56'
  | 'white'
  | 'transparent';

export type AlignItemsVariants = 'center' | 'flex-start' | 'flex-end';

export type DisplayVariants =
  | 'none'
  | 'block'
  | 'inline'
  | 'flex'
  | 'inline-block'
  | 'inline-flex';

export type FlexDirectionVariants =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

export type JustifyContentVariants =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between';

export type ResponsiveProp<T> =
  | T
  | [T, T]
  | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', T>>;

export type ResponsiveSpace = ResponsiveProp<SpaceVariants>;
export interface BoxProps
  extends Omit<
    AllHTMLAttributes<HTMLElement>,
    | 'width'
    | 'height'
    | 'suppressContentEditableWarning'
    | 'suppressHydrationWarning'
  > {
  alignItems?: ResponsiveProp<AlignItemsVariants>;
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
  textAlign?: ResponsiveProp<CSS.TextAlignProperty>;
  boxShadow?: BoxShadowVariant;
  height?: 'full';
  pointerEvents?: CSS.PointerEventsProperty;
  showAnts?: boolean;
  transform?: TransformVariants;
  transition?: TransitionVariants;
  width?: 'full';
  cursor?: CSS.CursorProperty;
}

export const StyledCodeReset = styled(StyledSystemBox.withComponent('code'))``;

export const StyledPreReset = styled(StyledSystemBox.withComponent('pre'))`
  overflow-x: auto;
  word-wrap: break-word;
  overflow-y: hidden;
`;

export const StyledSpanReset = styled(StyledSystemBox.withComponent('span'))``;

export const StyledAReset = styled(StyledSystemBox.withComponent('a'))`
  text-decoration: none;
  color: inherit;
`;

export const StyledButtonReset = styled(
  StyledSystemBox.withComponent('button'),
)`
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

  let Container: StyledComponentClass<StyledSystemProps, DefaultTheme>;
  if (component === 'a') {
    Container = StyledAReset;
  } else if (component === 'code') {
    Container = StyledCodeReset;
  } else if (component === 'pre') {
    Container = StyledPreReset;
  } else if (component === 'span') {
    Container = StyledSpanReset;
  } else if (component === 'button') {
    Container = StyledButtonReset;
  } else {
    Container = StyledSystemBox;
  }

  type TLength = string | 0 | number;

  const styledSystemProps = {
    alignItems: normaliseResponsiveProp<AlignItemsVariants>(alignItems),
    backgroundColor: normaliseResponsiveProp<ColorVariants>(backgroundColor),
    display: normaliseResponsiveProp<DisplayVariants>(display),
    flexDirection: normaliseResponsiveProp<FlexDirectionVariants>(
      flexDirection,
    ),
    justifyContent: normaliseResponsiveProp<JustifyContentVariants>(
      justifyContent,
    ),
    padding: normaliseResponsiveProp<CSS.PaddingProperty<TLength>>(padding),
    paddingLeft: normaliseResponsiveProp<CSS.PaddingLeftProperty<TLength>>(pL),
    paddingRight: normaliseResponsiveProp<CSS.PaddingRightProperty<TLength>>(
      pR,
    ),
    paddingTop: normaliseResponsiveProp<CSS.PaddingTopProperty<TLength>>(pT),
    paddingBottom: normaliseResponsiveProp<CSS.PaddingBottomProperty<TLength>>(
      pB,
    ),
    position: normaliseResponsiveProp<CSS.PositionProperty>(position),
    margin: normaliseResponsiveProp<CSS.MarginProperty<TLength>>(margin),
    marginLeft: normaliseResponsiveProp<CSS.MarginLeftProperty<TLength>>(mL),
    marginRight: normaliseResponsiveProp<CSS.MarginRightProperty<TLength>>(mR),
    marginTop: normaliseResponsiveProp<CSS.MarginTopProperty<TLength>>(mT),
    marginBottom: normaliseResponsiveProp<CSS.MarginBottomProperty<TLength>>(
      mB,
    ),
    textAlign: normaliseResponsiveProp<CSS.TextAlignProperty>(textAlign),
  };

  return (
    <Container {...styledSystemProps} {...rest}>
      {children}
    </Container>
  );
};

Box.displayName = 'Box';
