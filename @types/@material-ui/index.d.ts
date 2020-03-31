import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {
  PaletteColor,
  PaletteColorOptions,
  SimplePaletteColorOptions,
} from "@material-ui/core/styles/createPalette";
import { NeutralColor } from "@origin-digital/types";

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
