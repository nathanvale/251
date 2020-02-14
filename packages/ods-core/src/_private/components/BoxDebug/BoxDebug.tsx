import React from "react";
import {useDebugState} from "@origin-digital/ods-devtools";
import {Overlay} from "../Overlay/Overlay";
import {Box, BoxProps} from "../../../Box/Box";

export interface BoxDebugProps extends BoxProps {}

export const BoxDebug = ({children, ...rest}: BoxDebugProps) => {
  const {showCSSBorders} = useDebugState();
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

BoxDebug.displayName = "BoxDebug";
