import { makeStyles } from "@material-ui/core";
import {
  SvgIconColorVariants,
  SvgIconSizeVariants,
} from "@origin-digital/ods-types";

interface UseSvgIconStylesProps {
  size: SvgIconSizeVariants;
  color: SvgIconColorVariants;
}

export const useSvgIconStyles = ({
  color: colorProp,
  size,
}: UseSvgIconStylesProps) => {
  return makeStyles(
    ({ palette }) => {
      const sizeMap: Record<SvgIconSizeVariants, string> = {
        inherit: "inherit",
        small: "24px",
        medium: "48px",
        large: "64px",
      };
      const color =
        colorProp === "inherit"
          ? "inherit"
          : palette.getColorVariantCSSColor(colorProp);

      return {
        "svg-icon": {
          color,
          fontSize: sizeMap[size],
        },
      };
    },
    { classNamePrefix: `svg-icon-${colorProp}-${size}` }
  )()["svg-icon"];
};
