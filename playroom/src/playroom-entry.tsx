/* eslint-disable react/display-name */
import React from "react";
import { OriginThemeProvider } from "@origin-digital/ods-core";
import { coreMuiTheme } from "@origin-digital/ods-themes";

// eslint-disable-next-line import/no-default-export
export default ({ children }: { children: React.ReactChild }) => (
  <OriginThemeProvider muiTheme={coreMuiTheme}>{children}</OriginThemeProvider>
);
