import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {
  PaletteColor,
  PaletteColorOptions,
  SimplePaletteColorOptions,
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createTypography" {
  export interface BasekickStyles {
    fontSize: number;
    lineHeight: string;
    "-webkit-transform": string;
    "-ms-transform": string;
    transform: string;
    "padding-top": "1px";
    margin: 0;
    verticalAlign: "baseline";
    "&::before": {
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
    text: Record<FontSizeVariants, BasekickStyles>;
  }
}
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    critical: PaletteColor;
    positive: PaletteColor;
    caution: PaletteColor;
    primaryB: PaletteColor;
    promote: PaletteColor;
    promoteB: PaletteColor;
    secondaryB: PaletteColor;
  }

  interface TypeBackground {
    light: string;
  }

  interface PaletteOptions {
    critical?: SimplePaletteColorOptions;
    positive?: SimplePaletteColorOptions;
    caution?: SimplePaletteColorOptions;
    primaryB?: SimplePaletteColorOptions;
    promote?: SimplePaletteColorOptions;
    promoteB?: SimplePaletteColorOptions;
    secondaryB?: SimplePaletteColorOptions;
  }
}

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    // Add your custom type props here
  }
}
