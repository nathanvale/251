import { makeStyles } from "@material-ui/core";
import {
  SvgIconToneVariants,
  SvgIconSizeVariants,
} from "@origin-digital/ods-types";

interface UseSvgIconStylesProps {
  size: SvgIconSizeVariants;
  tone: SvgIconToneVariants;
}

export const useSvgIconStyles = ({ tone, size }: UseSvgIconStylesProps) => {
  return makeStyles(
    ({ palette }) => {
      const sizeMap: Record<SvgIconSizeVariants, string> = {
        inherit: "inherit",
        small: "24px",
        medium: "48px",
        large: "64px",
      };
      const color =
        tone === "inherit" ? "inherit" : palette.getColorVariantCSSColor(tone);

      return {
        "svg-icon": {
          color,
          fontSize: sizeMap[size],
        },
      };
    },
    { classNamePrefix: `svg-icon-${tone}-${size}` }
  )()["svg-icon"];
};
