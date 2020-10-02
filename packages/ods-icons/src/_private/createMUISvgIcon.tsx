import React, { RefObject, useContext } from "react";
import { SvgIconProps as MuiSvgIconProps } from "@material-ui/core";
import {
  SvgIcon,
  SvgIconProps,
  defaultColor,
  defaultSize,
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
          color,
          tone,
          size = defaultSize,
          "data-id": dataId = `Icon${displayName}`,
          ...rest
        }: SvgIconProps,
        ref
      ) => {
        // tone is deprecated but we still allow it to work.
        const finalColor = color ? color : tone;

        const contextColor = useContext(SvgIconContext);
        const svgIconStyles = useSvgIconStyles({
          color: finalColor || contextColor || defaultColor,
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
    size: defaultSize,
    viewBox: defaultViewBox,
  };

  Component.displayName = `Icon${displayName}`;

  return Component;
}
