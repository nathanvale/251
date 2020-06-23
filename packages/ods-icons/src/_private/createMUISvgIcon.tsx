import React, { RefObject } from "react";
import { SvgIconProps as MuiSvgIconProps } from "@material-ui/core";
import {
  SvgIcon,
  SvgIconProps,
  defaultColor,
  defaultsize,
  defaultViewBox,
} from "../SvgIcon/SvgIcon";
import { useSvgIconStyles } from "../_private/useSvgIconStyles";

export function createMUISvgIcon(
  displayName: string,
  MUISvgIcon: (props: MuiSvgIconProps) => JSX.Element
): typeof SvgIcon {
  const Component = React.memo(
    React.forwardRef(
      (
        {
          tone = defaultColor,
          size = defaultsize,
          "data-id": dataId = `Icon${displayName}`,
          ...rest
        }: SvgIconProps,
        ref
      ) => {
        const svgIconStyles = useSvgIconStyles({ tone, size });
        return (
          <MUISvgIcon
            className={svgIconStyles}
            ref={ref as RefObject<SVGSVGElement>}
            data-id={dataId}
            {...rest}
          />
        );
      }
    )
  );

  SvgIcon.defaultProps = {
    tone: defaultColor,
    size: defaultsize,
    viewBox: defaultViewBox,
  };

  Component.displayName = `Icon${displayName}`;

  return Component;
}
