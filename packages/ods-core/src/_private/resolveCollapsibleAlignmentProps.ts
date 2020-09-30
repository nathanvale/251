import {
  ResponsiveProp,
  ResponsiveRangeProps,
  AlignXType,
  AlignYType,
} from "@origin-digital/ods-types";
import {
  resolveResponsiveRangeProps,
  normaliseResponsiveProp,
  alignXToFlexAlign,
  alignYToFlexAlign,
} from "@origin-digital/ods-helpers";

export interface CollapsibleAlignmentProps {
  collapseBelow?: ResponsiveRangeProps["below"];
  alignX?: ResponsiveProp<AlignXType>;
  alignY?: ResponsiveProp<AlignYType>;
  reverse?: boolean;
}

export function resolveCollapsibleAlignmentProps({
  alignX,
  alignY,
  collapseBelow,
}: CollapsibleAlignmentProps) {
  const [
    collapseXs,
    collapseSm,
    collapseMd,
    collapseLg,
    collapseXl,
  ] = resolveResponsiveRangeProps({
    below: collapseBelow,
  });

  const [
    justifyContentXs,
    justifyContentSm,
    justifyContentMd,
    justifyContentLg,
    justifyContentXl,
  ] = normaliseResponsiveProp(alignXToFlexAlign(alignX) || "flex-start");

  return {
    collapseXs,
    collapseSm,
    collapseMd,
    collapseLg,
    collapseXl,
    collapsibleAlignmentProps: {
      display: {
        xs: collapseXs ? "block" : "flex",
        sm: collapseSm ? "block" : "flex",
        md: collapseMd ? "block" : "flex",
        lg: collapseLg ? "block" : "flex",
        xl: collapseXl ? "block" : "flex",
      },
      flexDirection: {
        xs: collapseXs ? "column" : "row",
        sm: collapseSm ? "column" : "row",
        md: collapseMd ? "column" : "row",
        lg: collapseLg ? "column" : "row",
        xl: collapseXl ? "column" : "row",
      },
      justifyContent: alignX
        ? {
            xs: justifyContentXs,
            sm: justifyContentSm,
            md: justifyContentMd,
            lg: justifyContentLg,
            xl: justifyContentXl,
          }
        : undefined,
      alignItems: alignY ? alignYToFlexAlign(alignY) : undefined,
    },
    collapsibleAlignmentChildProps: {
      display: {
        xs: collapseXs && justifyContentXs !== "flex-start" ? "flex" : "block",
        sm: collapseSm && justifyContentSm !== "flex-start" ? "flex" : "block",
        md: collapseMd && justifyContentMd !== "flex-start" ? "flex" : "block",
        lg: collapseLg && justifyContentLg !== "flex-start" ? "flex" : "block",
        xl: collapseXl && justifyContentXl !== "flex-start" ? "flex" : "block",
      },
      justifyContent: {
        xs: justifyContentXs,
        sm: justifyContentSm,
        md: justifyContentMd,
        lg: justifyContentLg,
        xl: justifyContentXl,
      },
    },
  } as const;
}
