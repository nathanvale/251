import React from "react";
import styled from "styled-components";

import {FieldOverlay} from "../_private/components/FieldOverlay/FieldOverlay";

import {Box} from "../Box/Box";
import {Text} from "../Text/Text";

export interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  Icon?: any;
  to?: string;
  component?: "a" | "button" | React.ReactNode;
}

const StyledBox = styled(Box)``;
const HoverOverlay = styled(FieldOverlay)`
  ${StyledBox}:hover & {
    opacity: 1;
    border-radius: 4px;
    background-color: #f1f1f1;
  }
`;

export const Link = ({
  children,
  Icon,
  component = "button",
  ...rest
}: LinkProps) => (
  <StyledBox
    component={component as any}
    paddingX="small"
    paddingY="small"
    position="relative"
    {...rest}
  >
    <HoverOverlay />
    <Box component="span" position="relative" pointerEvents="none">
      <Text size="xxsmall" baseline={false}>
        {Icon ? (
          <Box
            style={{
              width: "24px",
              height: "24px",
              verticalAlign: "middle",
            }}
            display="inline-block"
            position="relative"
            marginRight="xxsmall"
          >
            {Icon}
          </Box>
        ) : null}
        {children}
      </Text>
    </Box>
  </StyledBox>
);

Link.defaultProps = {
  component: "button",
};
