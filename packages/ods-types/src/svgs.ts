import { ReactNode, SVGProps } from "react";

export type SvgIconSizeVariants = "small" | "medium" | "large" | "inherit";

export interface ChevronContainerProps {
  children: ReactNode;
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string; //ColorVariants;
  width?: number | string;
  height?: number | string;
}
