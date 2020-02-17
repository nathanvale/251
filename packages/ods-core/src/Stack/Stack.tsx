import React, {ReactNode, Children} from "react";
import styled from "styled-components";
import {AlignItemsVariants, Box, ResponsiveSpace} from "../Box/Box";
import {Divider} from "../Divider/Divider";

export type AlignXType = "left" | "center" | "right" | "stretch";

const mapHAlignToAlignItems = (alignX: AlignXType): AlignItemsVariants => {
  const map = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
    stretch: "stretch",
  } as {[k in AlignXType]: AlignItemsVariants};
  return map[alignX];
};

export interface StackProps {
  children: ReactNode;
  space?: ResponsiveSpace;
  alignX?: AlignXType;
  dividers?: boolean;
  "data-id"?: string;
}

const StyledBox = styled(Box)`
  &:last-child {
    padding-bottom: 0;
  }
`;

export const Stack = ({
  children,
  space,
  dividers,
  "data-id": dataId,
  alignX = "stretch",
}: StackProps) => {
  const stackItems = Children.toArray(children);

  return (
    <Box
      data-id={dataId}
      width="full"
      display="flex"
      flexDirection="column"
      alignItems={mapHAlignToAlignItems(alignX)}
    >
      {stackItems.map((child, index) =>
        dividers ? (
          <>
            {index > 0 ? (
              <Box key={index * 2 - 1} alignSelf="stretch" paddingY={space}>
                <Divider />
              </Box>
            ) : null}
            <Box key={index * 2}>{child}</Box>
          </>
        ) : (
          <StyledBox paddingBottom={space} key={index}>
            {child}
          </StyledBox>
        ),
      )}
    </Box>
  );
};

Stack.defaultProps = {
  "data-id": "stack",
  dividers: false,
  alignX: "stretch",
  space: "none",
};

Stack.displayName = "Stack";
