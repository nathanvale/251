import React from 'react';
import styled from 'styled-components';
import {Box} from './box';

export interface DividerProps {}

const StyledBox = styled(Box)`
  height: 1px;
`;

export const Divider = () => (
  <Box position="relative">
    <StyledBox position="absolute" boxShadow="borderStandard" width="full" />
  </Box>
);

Divider.displayName = 'Divider';
