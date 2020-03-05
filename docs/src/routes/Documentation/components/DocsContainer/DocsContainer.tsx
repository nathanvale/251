import React, { ReactNode } from "react";
import styled from "styled-components";
import { MaxWidthProps, maxWidth } from "styled-system";
import { Box } from "@origin-digital/ods-core";

interface DocsContainerProps {
  children: ReactNode;
}

const StyledBox = styled(Box)<MaxWidthProps>`
  ${maxWidth}
`;

export const DocsContainer = ({ children }: DocsContainerProps) => (
  <StyledBox maxWidth={[null, null, "75%", "66%"]}>{children}</StyledBox>
);
