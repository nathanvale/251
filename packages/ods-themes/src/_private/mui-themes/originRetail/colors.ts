import { flattenPalette } from "../../helpers/flattenPalette";
import { palette } from "../core/palette";

export const colors = {
  ...flattenPalette(palette),
  darkRed: "#b30000",
  veryDarkRed: "#7b0000",
  redBackground: "#feebeb",
  redBorder: "#fcd6d6",
  mediumBlue: "#2275D3",
  darkGrey: "#3c3c3c",
  // For TextField
  greyHover: "#EAEAEA",
  greyDisabled: "#F8F8F8",
  greyTextField: "#666666",
  greyTextDisabled: "#9D9D9D",
  greyIcon: "#d6d6d6",
  black: "#232323",
  // For segmented controls
  yellow: "#FFF9EF",
  yellow16: "#FFF3DF",
  yellow24: "#FFEECE",
  yellow32: "#FFE7BE",
};
