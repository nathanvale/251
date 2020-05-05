import React, { ReactNode, Children } from "react";
import styled from "styled-components";
import { style, get } from "styled-system";
import {
  AlignXType,
  AlignItemsVariants,
  ResponsiveSpace,
  TLength,
  ResponsiveProp,
  BreakpointVariants,
} from "@origin-digital/ods-types";
import {
  normaliseResponsiveProp,
  cssLengthToString,
} from "@origin-digital/ods-helpers";
import * as CSS from "csstype";
import { Divider } from "../Divider/Divider";
import { Box, BoxProps } from "../Box/Box";

const mapHAlignToAlignItems = (alignX: AlignXType): AlignItemsVariants => {
  const map = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
    stretch: "stretch",
  } as { [k in AlignXType]: AlignItemsVariants };
  return map[alignX] || "stretch";
};
const mapResponsive = (
  alignX: ResponsiveProp<AlignXType>
): ResponsiveProp<AlignItemsVariants> => {
  if (typeof alignX === "string") {
    return mapHAlignToAlignItems(alignX);
  } else if (alignX instanceof Array) {
    return (alignX as [AlignXType, AlignXType]).map(mapHAlignToAlignItems) as [
      AlignItemsVariants,
      AlignItemsVariants
    ];
  } else if (alignX instanceof Object) {
    return (Object.keys(alignX) as BreakpointVariants[]).reduce(
      (newObj, breakpoint: BreakpointVariants) => {
        newObj[breakpoint] = mapHAlignToAlignItems(
          alignX[breakpoint] || "stretch"
        );
        return newObj;
      },
      {} as any
    );
  }
  return "stretch";
};

export interface StackProps {
  children: ReactNode;
  space?: ResponsiveSpace;
  alignX?: ResponsiveProp<AlignXType>;
  dividers?: boolean;
  "data-id"?: string;
}

const Container = styled<StackProps & BoxProps>(Box)`
  &&& > *:not(:last-child) {
    ${style({
      prop: "space",
      cssProperty: "margin-bottom",
      key: "space",
      transformValue: (n, scale) => cssLengthToString(get(scale, n)),
    })}
  }
`;

export const Stack = ({
  children,
  dividers,
  space,
  "data-id": dataId,
  alignX = "stretch",
}: StackProps) => {
  const stackItems = Children.toArray(children);

  return (
    <Container
      width="full"
      display="flex"
      flexDirection="column"
      space={
        normaliseResponsiveProp<CSS.MarginBottomProperty<TLength>>(space) as any
      }
      data-id={dataId}
      alignItems={mapResponsive(alignX)}
    >
      {!dividers
        ? children
        : stackItems.flatMap((child, index) => (
            <React.Fragment key={index}>
              {child}
              {index === stackItems.length - 1 ? null : <Divider />}
            </React.Fragment>
          ))}
    </Container>
  );
};

Stack.defaultProps = {
  "data-id": "stack",
  dividers: false,
  alignX: "stretch",
  space: "none",
};

Stack.displayName = "Stack";
