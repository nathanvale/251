import React, {ReactNode, Fragment, Children} from 'react';
import styled from 'styled-components';
import {Box, BoxProps} from '../Box/Box';
import {Divider} from '../Divider/Divider';

export interface StackProps {
  'data-id'?: string;
  children: ReactNode;
  space?: BoxProps['paddingBottom'];
  dividers?: boolean;
}

const StyledBox = styled(Box)`
  &:last-child {
    padding-bottom: 0;
  }
`;

export const Stack = ({
  children,
  space,
  dividers,
  'data-id': dataId,
}: StackProps) => {
  const stackItems = Children.toArray(children);

  if (stackItems.length <= 1) {
    return <Fragment>{stackItems}</Fragment>;
  }

  return (
    <Box data-id={dataId} width="full">
      {stackItems.map((child, index) =>
        dividers ? (
          <Box key={index}>
            {index > 0 ? (
              <Box width="full" paddingY={space}>
                <Divider />
              </Box>
            ) : null}
            {child}
          </Box>
        ) : (
          <StyledBox paddingBottom={space} key={index}>
            {child}
          </StyledBox>
        ),
      )}
    </Box>
  );
};

Stack.defaultProps = {
  'data-id': 'stack',
  space: 'none',
  dividers: false,
};

Stack.displayName = 'Stack';
