/* eslint-disable react/display-name */
import React from "react";
import { OriginThemeProvider } from "@origin-digital/ods-core";

// eslint-disable-next-line import/no-default-export
export default ({ children }: { children: React.ReactChild }) => (
  <OriginThemeProvider>{children}</OriginThemeProvider>
);
