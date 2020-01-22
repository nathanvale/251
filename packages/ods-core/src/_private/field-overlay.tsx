import React from 'react';
import {BoxProps} from '../box';
import {Overlay, OverlayProps} from './overlay';

export interface FieldOverlayProps
  extends Pick<OverlayProps, 'children' | 'visible' | 'backgroundColor'> {
  variant?: FieldOverlayVariant;
}

type FieldOverlayVariant = 'default' | 'focus' | 'hover' | 'critical';

const boxShadowForVariant: Record<
  FieldOverlayVariant,
  BoxProps['boxShadow']
> = {
  default: 'borderStandard',
  focus: 'outlineFocus',
  hover: 'borderFormHover',
  critical: 'borderCritical',
};

export const FieldOverlay = ({variant, ...restProps}: FieldOverlayProps) => (
  <Overlay
    boxShadow={boxShadowForVariant[variant!]}
    transition="fast"
    {...restProps}
  />
);
