import React, {ReactNode} from "react";
import styled from "styled-components";
import {height, width} from "styled-system";
import {Box, BoxProps} from "../Box/Box";

const StyledBox = styled(Box)`
  ${height}
  ${width}
`;

export interface PlaceholderProps {
  children?: ReactNode;
  "data-id"?: string;
  backgroundColor?: BoxProps["backgroundColor"];
  inline?: boolean;
  height?: string;
  width?: string;
}

export const Placeholder = ({
  children,
  backgroundColor,
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
      <span
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 500,
          color: "rgb(35, 35, 35)",
        }}
      >
        {children}
      </span>
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
