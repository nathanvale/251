import React, { createContext, useContext } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  Theme as MuiTheme,
} from "@material-ui/core";

import {
  LinkComponentProps,
  LinkComponentType,
} from "@origin-digital/ods-types";
import { coreMuiTheme } from "@origin-digital/ods-themes";
import { LayoutThemeProvider } from "../_private/components/LayoutThemeProvider/LayoutThemeProvider";

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
  muiTheme?: MuiTheme;
}

export const OriginThemeProvider = ({
  children,
  muiTheme = coreMuiTheme,
  linkComponent,
}: OriginThemeProviderProps) => {
  const linkComponentFromContext = useLinkComponent();
  return (
    <MUIThemeProvider theme={muiTheme}>
      <LayoutThemeProvider muiTheme={muiTheme}>
        <LinkComponentContext.Provider
          value={linkComponent || linkComponentFromContext}
        >
          {children}
        </LinkComponentContext.Provider>
      </LayoutThemeProvider>
    </MUIThemeProvider>
  );
};
