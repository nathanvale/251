import styled, {ColorVariants} from 'styled-components';

export interface IconProps {
  color?: ColorVariants;
}

export const IconSVG = styled.svg.attrs({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
})``;
