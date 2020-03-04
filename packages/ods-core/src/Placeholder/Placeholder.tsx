import React from "react";
import styled, {css} from "styled-components";
import {width, height, WidthProps, HeightProps} from "styled-system";
import {ResponsiveProp} from "@origin-digital/ods-types";
import {normaliseResponsiveProp} from "@origin-digital/ods-helpers";
import {Box, BoxProps} from "../Box/Box";

type PlaceholderShapeVariant = "rectangle" | "round";
export interface PlaceholderProps {
  "data-id"?: string;
  height?: ResponsiveProp<string | number>;
  label?: string;
  shape?: PlaceholderShapeVariant;
  width?: ResponsiveProp<string | number>;
}

interface ContainerProps extends WidthProps, HeightProps {
  shape: PlaceholderProps["shape"];
}

const Container = styled<Omit<BoxProps, "width" | "height">>(Box)<
  ContainerProps
>`
  ${width}
  ${height}
  border: 2px solid rgba(51, 51, 51, 0.3);
  ${p =>
    p.shape === "round"
      ? css`
          border-radius: 50%;
        `
      : undefined}}
`;

const defaultHeight = 120;
const defaultWidth = "auto";
const defaultShape = "rectangle";

export const Placeholder = ({
  "data-id": dataId,
  label,
  width = defaultWidth,
  height = defaultHeight,
  shape = defaultShape,
}: PlaceholderProps) => {
  return (
    <Container
      data-id={dataId}
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={normaliseResponsiveProp<string | number>(width)}
      height={normaliseResponsiveProp<string | number>(height)}
      shape={shape}
      backgroundColor="grey16"
    >
      {label ? (
        <Box
          paddingX="xsmall"
          paddingY="xxsmall"
          textAlign="center"
          style={{marginTop: "2px"}}
        >
          {label}
        </Box>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{width: "100%", height: "100%", position: "absolute"}}
        >
          <line
            style={{strokeWidth: "2px", stroke: "rgba(51,51,51,.1)"}}
            x1={0}
            y1={0}
            x2="100%"
            y2="100%"
          />
          <line
            style={{strokeWidth: "2px", stroke: "rgba(51,51,51,.1)"}}
            x1="100%"
            y1={0}
            x2={0}
            y2="100%"
          />
        </svg>
      )}
    </Container>
  );
};

Placeholder.defaultProps = {
  "data-id": "placeholder",
  height: defaultHeight,
  inline: false,
  shape: defaultShape,
  width: defaultWidth,
};

Placeholder.displayName = "Placeholder";
