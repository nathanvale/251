/* eslint-disable no-eval */
import React, { ReactNode, useContext } from "react";
import styled, { css } from "styled-components";
import {
  mapSpaceAliasToIndex,
  getRespValForBreakpoint,
} from "@origin-digital/ods-helpers";
import { BreakpointVariants } from "@origin-digital/ods-types";
import { ColumnsContext } from "../Columns/Columns";
import { Box } from "../Box/Box";
import { BoxDebug } from "../_private/components/BoxDebug/BoxDebug";

export interface ColumnProps {
  children?: ReactNode;
  width?:
    | "content"
    | "1/2"
    | "1/3"
    | "2/3"
    | "1/4"
    | "3/4"
    | "1/6"
    | "5/6"
    | "1/12"
    | "5/12"
    | "7/12"
    | "11/12"
    | "flex";
  "data-id"?: string;
}

const OuterStyledBox = styled(Box)<{
  columnWidth: ColumnProps["width"];
  collapseBelow?: BreakpointVariants;
}>`
  min-width: 0;
  ${(p) => (p.columnWidth === "content" ? "flex-shrink: 0;" : undefined)}
  ${(p) =>
    p.columnWidth && p.columnWidth !== "content" && p.columnWidth !== "flex"
      ? css`
          flex: 0 0 ${eval(p.columnWidth) * 100}%;
        `
      : undefined}
  ${(p) =>
    p.collapseBelow &&
    `
      @media (max-width: ${p.theme.breakpoints[p.collapseBelow]}) {
        width: 100%;
      }
    `}
`;

const InnerStyledBox = styled(Box)`
  div:first-child > & {
    padding-top: 0;
  }
`;

export const Column = ({
  children,
  width = "flex",
  "data-id": dataId,
}: ColumnProps) => {
  const { collapseBelow, space } = useContext(ColumnsContext);
  const spaceIndex = space && mapSpaceAliasToIndex({ space });

  return (
    <OuterStyledBox
      data-id={dataId}
      collapseBelow={collapseBelow}
      columnWidth={width}
      width={width !== "content" ? "full" : undefined}
    >
      <InnerStyledBox
        height="full"
        paddingLeft={
          collapseBelow
            ? getRespValForBreakpoint({
                breakpoint: collapseBelow,
                valOnBelow: "none",
                valOnAbove: spaceIndex,
              })
            : spaceIndex
        }
        paddingTop={
          collapseBelow
            ? getRespValForBreakpoint({
                breakpoint: collapseBelow,
                valOnBelow: spaceIndex,
                valOnAbove: "none",
              })
            : "none"
        }
      >
        <BoxDebug>{children}</BoxDebug>
      </InnerStyledBox>
    </OuterStyledBox>
  );
};

Column.defaultProps = {
  "data-id": "column",
  width: "flex",
};

Column.displayName = "Column";
