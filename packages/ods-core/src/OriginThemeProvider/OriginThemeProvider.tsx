import React, { createContext, useContext } from "react";
import { ThemeProvider /*injectGlobal*/ } from "styled-components";
import {
  ThemeProvider as MUIThemeProvider,
  Theme as MuiTheme,
} from "@material-ui/core";

import {
  Theme,
  LinkComponentProps,
  LinkComponentType,
} from "@origin-digital/ods-types";
import {
  coreMuiTheme,
  originRetailTheme,
  flattenPalette,
} from "@origin-digital/ods-themes";

const DefaultLinkComponent = React.forwardRef<
  HTMLAnchorElement,
  LinkComponentProps
>((props, ref) => {
  const { children, ...restProps } = props;
  return (
    <a {...restProps} ref={ref}>
      {children}
    </a>
  );
});
const LinkComponentContext = createContext<LinkComponentType>(
  DefaultLinkComponent
);
export const useLinkComponent = () => useContext(LinkComponentContext);

export interface OriginThemeProviderProps {
  children: React.ReactNode;
  linkComponent?: LinkComponentType;
  theme?: Theme;
  muiTheme?: MuiTheme;
}

export const OriginThemeProvider = ({
  children,
  theme = originRetailTheme,
  muiTheme = coreMuiTheme,
  linkComponent,
}: OriginThemeProviderProps) => {
  theme.colors = flattenPalette(muiTheme.palette);
  const linkComponentFromContext = useLinkComponent();
  return (
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={muiTheme}>
        <LinkComponentContext.Provider
          value={linkComponent || linkComponentFromContext}
        >
          {children}
        </LinkComponentContext.Provider>
      </MUIThemeProvider>
    </ThemeProvider>
  );
};
