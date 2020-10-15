import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {
  PaletteColor,
  PaletteColorOptions,
  SimplePaletteColorOptions,
} from "@material-ui/core/styles/createPalette";
import { ColorPaletteVariants, ToneVariants } from "@origin-digital/ods-types";

declare module "@material-ui/core/styles/createTypography" {
  export interface BasekickStyles {
    fontSize: number;
    lineHeight: string;
    margin: 0;
    verticalAlign?: "baseline";
    "-webkit-transform"?: string;
    "-ms-transform"?: string;
    transform?: string;
    "padding-top"?: "1px";
    "&::before"?: {
      content: '""';
      marginTop: string;
      display: "block";
      height: 0;
    };
  }

  export type FontSizeVariants =
    | "xxxxsmall"
    | "xxxsmall"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge";
  interface Typography {
    basekickActive: boolean;
  }
}
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    primaryB: PaletteColor;
    promoteB: PaletteColor;
    promoteC: PaletteColor;
    secondaryB: PaletteColor;
    getColorVariantCSSColor: (variant: ColorPaletteVariants) => string;
  }

  interface PaletteOptions {
    primaryB?: SimplePaletteColorOptions;
    promoteB?: SimplePaletteColorOptions;
    promoteC?: SimplePaletteColorOptions;
    secondaryB?: SimplePaletteColorOptions;
  }
}

declare module "@material-ui/core/styles/createMuiTheme" {}
