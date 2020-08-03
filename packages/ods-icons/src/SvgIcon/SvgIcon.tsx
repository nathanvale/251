import React, { useContext } from "react";
import {
  SvgIcon as MUISvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from "@material-ui/core";
import {
  ComponentBaseProps,
  SvgIconSizeVariants,
  SvgIconToneVariants,
} from "@origin-digital/ods-types";
import { useSvgIconStyles } from "../_private/useSvgIconStyles";
import { SvgIconContext } from "./SvgIconContext";

export interface SvgIconProps extends ComponentBaseProps {
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
    tone,
    size = defaultsize,
    muiProps,
    ...rest
  } = props;
  const contextTone = useContext(SvgIconContext);
  const svgIconStyles = useSvgIconStyles({
    tone: tone || contextTone || defaultColor,
    size,
  });
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
  size: defaultsize,
  viewBox: defaultViewBox,
};

SvgIcon.displayName = "SvgIcon";
