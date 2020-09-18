import React, { ReactNode, useContext } from "react";
import styled, { css } from "styled-components";
import { alignXToFlexAlign } from "@origin-digital/ods-helpers";
import {
  OptionalTrackableProps,
  ResponsiveProp,
  AlignX,
} from "@origin-digital/ods-types";
import { Box } from "../Box";
import { ColumnsContext, CollapsibleAlignmentChildProps } from "../Columns";

export interface ColumnProps extends OptionalTrackableProps {
  children?: ReactNode;
  alignX?: ResponsiveProp<AlignX>;
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
}

export const widthValueMap = {
  "1/2": 1 / 2,
  "1/3": 1 / 3,
  "2/3": 2 / 3,
  "1/4": 1 / 4,
  "3/4": 3 / 4,
  "1/6": 1 / 6,
  "5/6": 5 / 6,
  "1/12": 1 / 12,
  "5/12": 5 / 12,
  "7/12": 7 / 12,
  "11/12": 11 / 12,
};

const OuterStyledBox = styled(Box)<{
  columnWidth: ColumnProps["width"];
}>`
  min-width: 0;
  ${(p) => (p.columnWidth === "content" ? "flex-shrink: 0;" : undefined)}
  ${(p) =>
    p.columnWidth && p.columnWidth !== "content" && p.columnWidth !== "flex"
      ? css`
          flex: 0 0 ${widthValueMap[p.columnWidth] * 100}%;
        `
      : null}
`;

const InnerStyledBox = styled(Box)<{ alignX: ColumnProps["alignX"] }>`
  width: inherit;
  display: ${(p) => (p.alignX === "left" ? "block" : "flex")}
    ${OuterStyledBox}:first-child > & {
    padding-top: 0;
  }
`;

export const Column = ({
  children,
  width,
  "data-id": dataId,
  alignX,
}: ColumnProps) => {
  const {
    collapseXs,
    collapseSm,
    collapseMd,
    collapseLg,
    collapseXl,
    xsSpace,
    smSpace,
    mdSpace,
    lgSpace,
    xlSpace,
    collapsibleAlignmentChildProps,
  } = useContext(ColumnsContext);

  const {
    justifyContent,
  } = collapsibleAlignmentChildProps as CollapsibleAlignmentChildProps;

  return (
    <OuterStyledBox
      data-id={dataId}
      width={width !== "content" ? "full" : undefined}
      columnWidth={width}
    >
      <InnerStyledBox
        alignX={alignX}
        paddingLeft={{
          xs: collapseXs ? "none" : xsSpace,
          sm: collapseSm ? "none" : smSpace,
          md: collapseMd ? "none" : mdSpace,
          lg: collapseLg ? "none" : lgSpace,
          xl: collapseXl ? "none" : xlSpace,
        }}
        paddingTop={
          collapseXs || collapseSm || collapseMd || collapseLg || collapseXl
            ? {
                xs: collapseXs ? xsSpace : "none",
                sm: collapseSm ? smSpace : "none",
                md: collapseMd ? mdSpace : "none",
                lg: collapseLg ? lgSpace : "none",
                xl: collapseXl ? xlSpace : "none",
              }
            : undefined
        }
        height="full"
        {...collapsibleAlignmentChildProps}
        // Override Columns alignX with Column alignX
        justifyContent={alignX ? alignXToFlexAlign(alignX) : justifyContent}
      >
        {children}
      </InnerStyledBox>
    </OuterStyledBox>
  );
};

Column.defaultProps = {
  "data-id": "column",
  width: "flex",
  alignX: "left",
};

Column.displayName = "Column";
