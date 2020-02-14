import React, {ReactElement, createContext, useMemo} from "react";
import {
  BreakpointVariants,
  AlignItemsVariants,
} from "@origin-digital/ods-types";

import {ColumnProps} from "../Column/Column";
import {BoxDebug} from "../_private/components/BoxDebug/BoxDebug";
import {setBreakpoint} from "../../../ods-helpers/src/utils";
import {ResponsiveSpace} from "../Box/Box";
import {mapSpaceAliasToIndex} from "../../../ods-helpers/src/spacing";

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
  } as {[k in AlignYType]: AlignItemsVariants};
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
  const columnsContextValue = useMemo(() => ({collapseBelow, space}), [
    collapseBelow,
    space,
  ]);

  const spaceIndex = mapSpaceAliasToIndex(space, true);
  return (
    <BoxDebug
      data-id={dataId}
      display="flex"
      flexDirection={
        collapseBelow && setBreakpoint(collapseBelow, "column", "row")
      }
      alignItems={mapVAlignToAlignItems(alignY)}
      marginLeft={
        (collapseBelow
          ? setBreakpoint(collapseBelow, "none", spaceIndex)
          : spaceIndex) as TS_FIXME
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
