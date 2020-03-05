import styled from "styled-components";
import { ColorVariants } from "@origin-digital/ods-types";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: ColorVariants;
}

export const IconSVG = styled.svg.attrs<IconProps>({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "currentColor",
})``;
