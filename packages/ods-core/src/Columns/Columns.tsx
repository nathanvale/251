import React, { ReactElement, createContext, useMemo } from "react";
import {
  BreakpointVariants,
  AlignItemsVariants,
  ResponsiveSpace,
} from "@origin-digital/ods-types";
import {
  getRespValForBreakpoint,
  mapSpaceAliasToIndex,
} from "@origin-digital/ods-helpers";
import { ColumnProps } from "../Column/Column";
import { BoxDebug } from "../_private/components/BoxDebug/BoxDebug";

interface ColumnsContextValue {
  collapseBelow?: ColumnsProps["collapseBelow"];
  space?: ColumnsProps["space"];
}

const defaultSpace = "none";

export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseBelow: undefined,
  space: defaultSpace,
});

export type AlignYType = "top" | "center" | "bottom";

const mapVAlignToAlignItems = (alignY: AlignYType): AlignItemsVariants => {
  const map = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
  } as { [k in AlignYType]: AlignItemsVariants };
  return map[alignY];
};

export interface ColumnsProps {
  children: ReactElement<ColumnProps>[] | ReactElement<ColumnProps>;
  space?: ResponsiveSpace;
  collapseBelow?: BreakpointVariants;
  alignY?: AlignYType;
  "data-id"?: string;
}

export const Columns = ({
  children,
  collapseBelow,
  "data-id": dataId,
  space = defaultSpace,
  alignY = "top",
}: ColumnsProps) => {
  // Prevent re-renders when context values haven't changed
  const columnsContextValue = useMemo(() => ({ collapseBelow, space }), [
    collapseBelow,
    space,
  ]);

  const spaceIndex = mapSpaceAliasToIndex({ space, isNegative: true });
  const alignItems = mapVAlignToAlignItems(alignY);
  return (
    <BoxDebug
      data-id={dataId}
      display="flex"
      flexDirection={
        collapseBelow &&
        getRespValForBreakpoint({
          breakpoint: collapseBelow,
          valOnBelow: "column",
          valOnAbove: "row",
        })
      }
      alignItems={
        collapseBelow
          ? getRespValForBreakpoint({
              breakpoint: collapseBelow,
              valOnBelow: "flex-start",
              valOnAbove: alignItems,
            })
          : alignItems
      }
      marginLeft={
        collapseBelow
          ? getRespValForBreakpoint({
              breakpoint: collapseBelow,
              valOnBelow: "none",
              valOnAbove: spaceIndex,
            })
          : spaceIndex
      }
    >
      <ColumnsContext.Provider value={columnsContextValue}>
        {children}
      </ColumnsContext.Provider>
    </BoxDebug>
  );
};

Columns.defaultProps = {
  "data-id": "columns",
  space: "none",
  alignY: "top",
};

Columns.displayName = "Columns";
