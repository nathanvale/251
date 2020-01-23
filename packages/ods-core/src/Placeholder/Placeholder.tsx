import React, {ReactNode} from 'react';
import styled, {ColorVariants} from 'styled-components';
import {height} from 'styled-system';
import {Box, BoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

const StyledBox = styled(Box)`
  ${height}
`;

export interface PlaceholderProps {
  children?: ReactNode;
  'data-id'?: string;
  backgroundColor?: BoxProps['backgroundColor'];
  color?: ColorVariants;
  inline?: boolean;
  height?: string;
}

export const Placeholder = ({
  children,
  backgroundColor,
  color,
  'data-id': dataId,
  inline,
  height,
}: PlaceholderProps) => {
  return (
    <StyledBox
      data-id={dataId}
      display={inline ? 'inline-flex' : 'flex'}
      backgroundColor={backgroundColor}
      paddingX="large"
      paddingY="medium"
      justifyContent="center"
      alignItems="center"
      height={height as BoxProps['height']}
    >
      <Text size="xsmall" color={color}>
        {children}
      </Text>
    </StyledBox>
  );
};

Placeholder.defaultProps = {
  'data-id': 'placeholder',
  backgroundColor: 'grey16',
  color: 'grey56',
  inline: false,
};

Placeholder.displayName = 'Placeholder';
