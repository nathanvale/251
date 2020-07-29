import React, { ReactNode } from "react";
import { resolveResponsiveRangeProps } from "@origin-digital/ods-helpers";
import { ResponsiveRangeProps } from "@origin-digital/ods-types";
import { Box } from "../Box/Box";

export interface HiddenProps extends ResponsiveRangeProps {
  children: ReactNode;
  inline?: boolean;
}

export const Hidden = ({ children, above, below, inline }: HiddenProps) => {
  const [
    hiddenOnXs,
    hiddenOnSm,
    hiddenOnMd,
    hiddenOnLg,
    hiddenOnXl,
  ] = resolveResponsiveRangeProps({
    above,
    below,
  });

  const display = inline ? "inline" : "block";

  return (
    <Box
      display={{
        xs: hiddenOnXs ? "none" : display,
        sm: hiddenOnSm ? "none" : display,
        md: hiddenOnMd ? "none" : display,
        lg: hiddenOnLg ? "none" : display,
        xl: hiddenOnXl ? "none" : display,
      }}
      component={inline ? "span" : "div"}
    >
      {children}
    </Box>
  );
};

Hidden.displayName = "Hidden";

Hidden.defaultProps = {
  inline: false,
};
