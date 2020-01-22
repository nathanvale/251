import React from 'react';

import {Box, BoxProps} from './box';
import {useGlobalState} from './_private/context/global-context';
import {Overlay} from './_private/overlay';

export interface BoxDebugProps extends BoxProps {}

export const BoxDebug = ({children, ...rest}: BoxDebugProps) => {
  const {showCSSBorders} = useGlobalState();
  if (showCSSBorders) {
    return (
      <Box position="relative" {...rest}>
        <Overlay visible showAnts />
        {children}
      </Box>
    );
  }
  return <Box {...rest}>{children}</Box>;
};

BoxDebug.displayName = 'BoxDebug';
