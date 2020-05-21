import { ResponsiveProp, AlignXType } from "@origin-digital/ods-types";
import { mapResponsiveProp } from "./mapResponsiveProp";

export const alignToFlexAlign = (
  align: ResponsiveProp<AlignXType> | undefined
) =>
  mapResponsiveProp(align, {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  });
