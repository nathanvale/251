/* eslint-disable no-eval */
import React, {ReactNode, useContext} from "react";
import styled, {css} from "styled-components";
import {ColumnsContext} from "../Columns/Columns";
import {Box} from "../Box/Box";
import {setBreakpoint} from "../_private/helpers/utils";
import {BoxDebug} from "../_private/components/BoxDebug/BoxDebug";
import {mapSpaceAliasToIndex} from "../_private/helpers/spacing";

export interface ColumnProps {
  children: ReactNode;
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

const OuterStyledBox = styled(Box)<{columnWidth: ColumnProps["width"]}>`
  min-width: 0;
  ${p => (p.columnWidth === "content" ? "flex-shrink: 0;" : undefined)}
  ${p =>
    p.columnWidth && p.columnWidth !== "content" && p.columnWidth !== "flex"
      ? css`
          flex: 0 0 ${eval(p.columnWidth) * 100}%;
        `
      : undefined}
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
  const {collapseBelow, space} = useContext(ColumnsContext);
  const spaceIndex = space && mapSpaceAliasToIndex(space);
  return (
    <OuterStyledBox
      data-id={dataId}
      columnWidth={width}
      width={width !== "content" ? "full" : undefined}
    >
      <InnerStyledBox
        height="full"
        paddingLeft={
          (collapseBelow
            ? setBreakpoint(collapseBelow, "none", spaceIndex)
            : spaceIndex) as TS_FIXME
        }
        paddingTop={
          (collapseBelow
            ? setBreakpoint(collapseBelow, spaceIndex, "none")
            : "none") as TS_FIXME
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
