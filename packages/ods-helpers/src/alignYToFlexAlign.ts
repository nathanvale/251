import { ResponsiveProp, AlignYType } from "@origin-digital/ods-types";
import { mapResponsiveProp } from "./mapResponsiveProp";

export const alignYToFlexAlign = (
  alignY: ResponsiveProp<AlignYType> | undefined
) =>
  mapResponsiveProp(alignY, {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
  });
