import React, { ReactElement, createContext } from "react";
import {
  ResponsiveSpace,
  CollapsibleAlignmentProps,
  OptionalTrackableProps,
  SpaceVariants,
} from "@origin-digital/ods-types";
import {
  normaliseResponsiveProp,
  mapToStyledSystem,
} from "@origin-digital/ods-helpers";
import { ColumnProps } from "../Column/Column";

import { resolveCollapsibleAlignmentProps } from "../_private/resolveCollapsibleAlignmentProps";
import { InnerContainer } from "../Inline/Inline";

export type CollapsibleAlignmentChildProps = ReturnType<
  typeof resolveCollapsibleAlignmentProps
>["collapsibleAlignmentChildProps"];

interface ColumnsContextValue {
  collapseXs: boolean;
  collapseSm: boolean;
  collapseMd: boolean;
  collapseLg: boolean;
  collapseXl: boolean;
  xsSpace?: SpaceVariants;
  smSpace?: SpaceVariants;
  mdSpace?: SpaceVariants;
  lgSpace?: SpaceVariants;
  xlSpace?: SpaceVariants;
  /**
   * The display, flexDirection and justifyContent css props per xs,sm,md,lg or
   * xl breakpoint depending on if the Columns are collapsed or aligned or not.
   * This logic is shared with the Inline component.
   */
  collapsibleAlignmentChildProps: CollapsibleAlignmentChildProps | {};
}

export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseXs: false,
  collapseSm: false,
  collapseMd: false,
  collapseLg: false,
  collapseXl: false,
  xsSpace: "none",
  smSpace: "none",
  mdSpace: "none",
  lgSpace: "none",
  xlSpace: "none",
  collapsibleAlignmentChildProps: {},
});

export interface ColumnsProps
  extends CollapsibleAlignmentProps,
    OptionalTrackableProps {
  space: ResponsiveSpace;
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
}

const defaultSpace = "none";
const defaultAlignX = "left";
const defaultAlignY = "top";

export const Columns = ({
  children,
  collapseBelow,
  "data-id": dataId,
  space = defaultSpace,
  alignX = defaultAlignX,
  alignY = defaultAlignY,
}: ColumnsProps) => {
  const [xsSpace, smSpace, mdSpace, lgSpace, xlSpace] = normaliseResponsiveProp(
    space
  );

  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
    collapseXs,
    collapseSm,
    collapseMd,
    collapseLg,
    collapseXl,
  } = resolveCollapsibleAlignmentProps({
    collapseBelow,
    alignX,
    alignY,
  });

  return (
    <InnerContainer
      data-id={dataId}
      space={
        mapToStyledSystem({
          xs: collapseXs ? "none" : xsSpace,
          sm: collapseSm ? "none" : smSpace,
          md: collapseMd ? "none" : mdSpace,
          lg: collapseLg ? "none" : lgSpace,
          xl: collapseXl ? "none" : xlSpace,
        }) || "none"
      }
      {...collapsibleAlignmentProps}
    >
      <ColumnsContext.Provider
        value={{
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
        }}
      >
        {children}
      </ColumnsContext.Provider>
    </InnerContainer>
  );
};

Columns.defaultProps = {
  "data-id": "columns",
  space: "large",
  alignY: defaultAlignY,
  alignX: defaultAlignX,
};

Columns.displayName = "Columns";
