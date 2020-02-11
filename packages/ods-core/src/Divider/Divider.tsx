import React from "react";
import styled from "styled-components";
import {Box} from "../Box/Box";

export interface DividerProps {
  "data-id"?: string;
}

const StyledBox = styled(Box)`
  height: 1px;
`;

export const Divider = ({"data-id": dataId = "divider"}: DividerProps) => (
  <Box position="relative" data-id={dataId}>
    <StyledBox position="absolute" boxShadow="borderStandard" width="full" />
  </Box>
);

Divider.displayName = "Divider";
Divider.defaultProps = {
  "data-id": "divider",
};
