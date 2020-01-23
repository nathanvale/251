import React from 'react';

import {Box, BoxProps} from '../../../Box/Box';
import {useGlobalState} from '../../context/global-context';
import {Overlay} from '../Overlay/Overlay';

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
