import React, { useContext } from "react";
import {
  SvgIcon as MUISvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from "@material-ui/core";
import {
  MuiBasedComponentBaseProps,
  SvgIconSizeVariants,
  SvgIconColorVariants,
} from "@origin-digital/ods-types";
import { useSvgIconStyles } from "../_private/useSvgIconStyles";
import { SvgIconContext } from "./SvgIconContext";

export interface SvgIconProps extends MuiBasedComponentBaseProps {
  color?: SvgIconColorVariants;
  muiProps?: MuiSvgIconProps;
  size?: SvgIconSizeVariants;
  titleAccess?: string;
  /**
   * @deprecated Use color props instead. Will be removed in ODS v2.0
   */
  tone?: SvgIconColorVariants;
  viewBox?: string;
}

export const defaultColor = "secondary";
export const defaultSize = "small";
export const defaultViewBox = "0 0 24 24";

export const SvgIcon = React.forwardRef<any, SvgIconProps>((props, ref) => {
  const {
    children,
    tone,
    color,
    size = defaultSize,
    muiProps,
    ...rest
  } = props;
  // tone is deprecated but we still allow it to work.
  const finalColor = color ? color : tone;

  const contextColor = useContext(SvgIconContext);
  const svgIconStyles = useSvgIconStyles({
    color: finalColor || contextColor || defaultColor,
    size,
  });
  return (
    <MUISvgIcon className={svgIconStyles} ref={ref} {...rest} {...muiProps}>
      {children}
    </MUISvgIcon>
  );
});

SvgIcon.defaultProps = {
  "data-id": "svg-icon",
  size: defaultSize,
  viewBox: defaultViewBox,
};

SvgIcon.displayName = "SvgIcon";
