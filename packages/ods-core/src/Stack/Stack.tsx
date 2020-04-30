import React, { ReactNode, Children } from "react";
import styled, { css } from "styled-components";
import { style, MarginBottomProps, get } from "styled-system";
import {
  AlignXType,
  AlignItemsVariants,
  ResponsiveSpace,
  TLength,
} from "@origin-digital/ods-types";
import {
  normaliseResponsiveProp,
  cssLengthToString,
} from "@origin-digital/ods-helpers";
import * as CSS from "csstype";
import { Divider } from "../Divider/Divider";

const mapHAlignToAlignItems = (alignX: AlignXType): AlignItemsVariants => {
  const map = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
    stretch: "stretch",
  } as { [k in AlignXType]: AlignItemsVariants };
  return map[alignX];
};

export interface StackProps {
  children: ReactNode;
  space?: ResponsiveSpace;
  alignX?: AlignXType;
  dividers?: boolean;
  "data-id"?: string;
}

interface ContainerProps extends MarginBottomProps {
  alignItems?: AlignItemsVariants;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(p) =>
    p.alignItems &&
    css`
      align-items: ${p.alignItems};
    `}
  &&& > *:not(:last-child) {
    ${style({
      prop: "marginBottom",
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
      marginBottom={normaliseResponsiveProp<CSS.MarginBottomProperty<TLength>>(
        space
      )}
      data-id={dataId}
      alignItems={mapHAlignToAlignItems(alignX)}
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
