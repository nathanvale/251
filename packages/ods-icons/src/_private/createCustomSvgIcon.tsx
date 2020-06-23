import React from "react";

import { SvgIcon, SvgIconProps } from "../SvgIcon/SvgIcon";

export function createSvgIcon(
  path: React.ReactNode,
  displayName: string
): typeof SvgIcon {
  const Component = React.memo(
    React.forwardRef((props: SvgIconProps, ref) => (
      <SvgIcon ref={ref} data-id={`Icon${displayName}`} {...props}>
        {path}
      </SvgIcon>
    ))
  );

  Component.displayName = `Icon${displayName}`;

  return Component;
}
