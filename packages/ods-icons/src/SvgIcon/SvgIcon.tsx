import React from "react";
import {
  SvgIcon as MUISvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from "@material-ui/core";
import {
  OptionalTrackableProps,
  SvgIconToneVariants,
  SvgIconSizeVariants,
} from "@origin-digital/ods-types";
import { useSvgIconStyles } from "../_private/useSvgIconStyles";

export interface SvgIconProps extends OptionalTrackableProps {
  children?: React.ReactNode;
  tone?: SvgIconToneVariants;
  size?: SvgIconSizeVariants;
  muiProps?: MuiSvgIconProps;
  titleAccess?: string;
  viewBox?: string;
}

export const defaultColor = "secondary";
export const defaultsize = "small";
export const defaultViewBox = "0 0 24 24";

export const SvgIcon = React.forwardRef<any, SvgIconProps>((props, ref) => {
  const {
    "data-id": dataId,
    children,
    tone = defaultColor,
    size = defaultsize,
    muiProps,
    ...rest
  } = props;
  const svgIconStyles = useSvgIconStyles({ tone, size });
  return (
    <MUISvgIcon
      data-id={dataId}
      className={svgIconStyles}
      ref={ref}
      {...rest}
      {...muiProps}
    >
      {children}
    </MUISvgIcon>
  );
});

SvgIcon.defaultProps = {
  "data-id": "svg-icon",
  tone: defaultColor,
  size: defaultsize,
  viewBox: defaultViewBox,
};

SvgIcon.displayName = "SvgIcon";
