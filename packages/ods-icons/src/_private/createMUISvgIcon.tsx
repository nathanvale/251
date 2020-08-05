import React, { RefObject, useContext } from "react";
import { SvgIconProps as MuiSvgIconProps } from "@material-ui/core";
import {
  SvgIcon,
  SvgIconProps,
  defaultColor,
  defaultsize,
  defaultViewBox,
} from "../SvgIcon/SvgIcon";
import { SvgIconContext } from "../SvgIcon/SvgIconContext";
import { useSvgIconStyles } from "../_private/useSvgIconStyles";

export function createMUISvgIcon(
  displayName: string,
  MUISvgIcon: (props: MuiSvgIconProps) => JSX.Element
): typeof SvgIcon {
  const Component = React.memo(
    React.forwardRef(
      (
        {
          tone,
          size = defaultsize,
          "data-id": dataId = `Icon${displayName}`,
          ...rest
        }: SvgIconProps,
        ref
      ) => {
        const contextTone = useContext(SvgIconContext);
        const svgIconStyles = useSvgIconStyles({
          tone: tone || contextTone || defaultColor,
          size,
        });
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
    size: defaultsize,
    viewBox: defaultViewBox,
  };

  Component.displayName = `Icon${displayName}`;

  return Component;
}
