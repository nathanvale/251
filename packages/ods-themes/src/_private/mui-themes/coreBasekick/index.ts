import createMuiTheme, {
  ThemeOptions,
} from "@material-ui/core/styles/createMuiTheme";

import { getMUITypography } from "../core/typography";
import { themeOptions as coreThemeOptions } from "../core";

const typography = getMUITypography(true);
const themeOptions: ThemeOptions = {
  ...coreThemeOptions,
  typography,
};

export const coreBasekickMuiTheme = createMuiTheme(themeOptions);
