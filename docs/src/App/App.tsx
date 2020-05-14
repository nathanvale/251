import React, { StrictMode } from "react";
import { OriginThemeProvider } from "@origin-digital/ods-core";
import { coreBasekickMuiTheme } from "@origin-digital/ods-themes";
import { Route, Switch, Redirect } from "react-router";
import map from "lodash/map";
import { Navigation } from "./Navigation/Navigation";
import home from "./routes/home";
import guides from "./routes/guides";
import foundations from "./routes/foundations";
import components from "./routes/components";

export const App = () => (
  <StrictMode>
    <OriginThemeProvider muiTheme={coreBasekickMuiTheme}>
      <Navigation>
        <Switch>
          {map(
            { ...home, ...guides, ...foundations, ...components },
            (routeProps, path) => (
              <Route key={path} {...routeProps} path={path} />
            )
          )}
          <Redirect path="/components" exact to="/" />
        </Switch>
      </Navigation>
    </OriginThemeProvider>
  </StrictMode>
);
