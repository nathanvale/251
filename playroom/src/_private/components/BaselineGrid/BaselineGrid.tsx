import React from "react";
import styled from "styled-components";
import { Box } from "@origin-digital/ods-core";

export interface BaselineGridProps {
  children: React.ReactNode;
  padding: "none" | "small" | "medium" | "large";
  visible?: boolean;
}

export const BaselineGrid = ({
  children,
  padding,
  visible,
}: BaselineGridProps) => {
  const StyledBox = styled(Box)`
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${(p) => p.theme.colors.white},
      ${(p) => p.theme.colors.white} 75%,
      ${(p) => p.theme.colors.grey200} 100%
    );
    background-size: 100% 4px;
  `;

  return visible ? (
    <StyledBox padding={padding}>{children}</StyledBox>
  ) : (
    children
  );
};

BaselineGrid.defaultProps = {
  padding: "none",
  visible: true,
};

BaselineGrid.displayName = "BaselineGrid";
