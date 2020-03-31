import React from "react";
import styled from "styled-components";
import { Box } from "../Box/Box";

export interface DividerProps {
  "data-id"?: string;
}

const StyledBox = styled(Box)`
  height: 1px;
  box-shadow: inset 0 0 0 1px ${p => p.theme.colors.grey200};
`;

export const Divider = ({ "data-id": dataId = "divider" }: DividerProps) => (
  <Box position="relative" data-id={dataId} alignSelf="stretch">
    <StyledBox position="absolute" boxShadow="borderStandard" width="full" />
  </Box>
);

Divider.displayName = "Divider";
Divider.defaultProps = {
  "data-id": "divider",
};
