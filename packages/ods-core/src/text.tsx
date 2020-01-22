import React, {ReactNode, ReactType} from 'react';
import styled, {Color} from 'styled-components';
import {style} from 'styled-system';
import {Box} from './box';

import {basekick} from './_private/hooks/typography/basekick';

export const textColor = style({
  prop: 'color',
  key: 'colors',
});

/* import {useText} from './_private/hooks/typography/use-text'; */

export interface TextProps {
  children?: ReactNode;
  component?: ReactType;
  size?:
    | 'xxxsmall'
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  color?: keyof Color;
  weight?: 'regular' | 'medium';
  baseline?: boolean;
  className?: string;
}

export const Text = ({
  children,
  component = 'span',
  size = 'xxsmall',
  color = 'grey',
  weight = 'regular',
  baseline = true,
  className,
}: TextProps) => {
  //const textStyles = useText({weight, size, baseline});
  /*  ${textStyles} */
  const StyledBox = styled(Box)`
    ${p => {
      return basekick({
        baseFontSize: 1,
        typeSizeModifier: p.theme.typography.text[size].size,
        typeRowSpan: p.theme.typography.text[size].rows,
        descenderHeightScale: p.theme.typography.descenderHeightScale,
        capHeight: p.theme.typography.capHeightScale,
        gridRowHeight: p.theme.typography.gridRow,
      });
    }}
    font-family: gordita, sans-serif;
    font-weight: ${p => p.theme.typography.weight[weight]};
    ${textColor}
  `;
  return (
    <StyledBox
      data-id="text"
      display="block"
      component={component}
      color={color}
      className={className}
    >
      {children}
    </StyledBox>
  );
};

Text.defaultValues = {
  color: 'grey',
};

Text.displayName = 'Text';
