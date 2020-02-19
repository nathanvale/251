import React, {ReactNode} from "react";
import styled from "styled-components";
import {BoxProps, Box} from "@origin-digital/ods-core";

export interface OverlayProps {
  children?: ReactNode;
  visible?: boolean;
  backgroundColor?: BoxProps["backgroundColor"];
  boxShadow?: BoxProps["boxShadow"];
  transform?: BoxProps["transform"];
  transition?: BoxProps["transition"];
  showAnts?: boolean;
  className?: string;
}

const StyledBox = styled(Box)<OverlayProps>`
  opacity: ${p => (p.visible ? "1" : "0")};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Overlay = ({
  visible = false,
  backgroundColor,
  boxShadow,
  transform,
  transition,
  children,
  showAnts,
  className,
}: OverlayProps) => {
  return (
    <StyledBox
      visible={visible}
      position="absolute"
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      transform={transform}
      transition={transition}
      className={className}
      showAnts={showAnts}
    >
      {children}
    </StyledBox>
  );
};
