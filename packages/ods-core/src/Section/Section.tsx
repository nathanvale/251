// TODO: remove below line so that type checking is done on this file
// @ts-nocheck
/**
 * This @ts-nocheck had to be done as the media.sm tagged template literals have complex types.
 * We should simplify these, as they are hard to understand and follow and not sure worth the complexity.
 */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import {media} from '../_private/helpers/media';
import {BoxDebug} from '../_private/components/BoxDebug/BoxDebug';

type FluidityVariant = 'off' | 'max-width-at-xl' | 'full-width';
type BackgroundVariant = 'transparent' | 'grey' | 'white';

export interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: BackgroundVariant;
  'data-id'?: string;
  fluidity?: FluidityVariant;
  hideGutter?: boolean;
  stretchY?: boolean;
}

const StyledBoxDebug = styled<SectionProps & {paddingX?: string; theme: any}>(
  BoxDebug,
)`
  ${p =>
    p.fluidity !== 'full-width'
      ? `max-width: ${p.theme.section.maxWidth.xl}px;`
      : ''}

  ${p =>
    p.fluidity === 'off' &&
    media.sm`
    max-width: ${p.theme.section.maxWidth.sm}px;
  `}

  ${p =>
    p.fluidity === 'off' &&
    media.md`
    max-width: ${p.theme.section.maxWidth.md}px;
  `}

  ${p =>
    p.fluidity === 'off' &&
    media.lg`
    max-width: ${p.theme.section.maxWidth.lg}px;
  `}

  ${p =>
    p.fluidity === 'full-width'
      ? media.xl`
      max-width: 100%;
    `
      : media.xl`
    max-width: ${p.theme.section.maxWidth.xl}px;
  `}
`;

export const Section = ({
  stretchY,
  hideGutter,
  children,
  'data-id': dataId,
  ...rest
}: SectionProps) => {
  return (
    <StyledBoxDebug
      data-id={dataId}
      paddingX={hideGutter ? undefined : 'medium'}
      height={stretchY ? 'full' : undefined}
      width="full"
      style={{marginLeft: 'auto', marginRight: 'auto'}}
      {...rest}
    >
      {children}
    </StyledBoxDebug>
  );
};

Section.defaultProps = {
  'data-id': 'section',
  backgroundColor: 'transparent',
  fluidity: 'off',
  hideGutter: false,
  stretchY: false,
};

Section.displayName = 'Section';
