import React, {ReactNode} from "react";
import styled from "styled-components";
import {ColorVariants} from "@origin-digital/ods-themes";
import {height, width} from "styled-system";
import {Box, BoxProps} from "../Box/Box";
import {Text} from "../Text/Text";

const StyledBox = styled(Box)`
  ${height}
  ${width}
`;

export interface PlaceholderProps {
  children?: ReactNode;
  "data-id"?: string;
  backgroundColor?: BoxProps["backgroundColor"];
  color?: ColorVariants;
  inline?: boolean;
  height?: string;
  width?: string;
}

export const Placeholder = ({
  children,
  backgroundColor,
  color,
  "data-id": dataId,
  inline,
  height,
  width,
}: PlaceholderProps) => {
  return (
    <StyledBox
      data-id={dataId}
      display={inline ? "inline-flex" : "flex"}
      backgroundColor={backgroundColor}
      paddingX="large"
      paddingY="medium"
      justifyContent="center"
      alignItems="center"
      height={height as BoxProps["height"]}
      width={width as BoxProps["height"]}
    >
      <Text size="xsmall" color={color}>
        {children}
      </Text>
    </StyledBox>
  );
};

Placeholder.defaultProps = {
  "data-id": "placeholder",
  backgroundColor: "grey16",
  color: "grey56",
  inline: false,
};

Placeholder.displayName = "Placeholder";
