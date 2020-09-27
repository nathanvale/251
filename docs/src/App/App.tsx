import React, { StrictMode } from "react";
import { Route, Switch, Redirect } from "react-router";
import { Link as ReactRouterLink } from "react-router-dom";
import map from "lodash/map";
import { OriginThemeProvider } from "@origin-digital/ods-core";
import { LinkComponentProps } from "@origin-digital/ods-types";
import { Navigation } from "./Navigation/Navigation";
import home from "./routes/home";
import guides from "./routes/guides";
import foundations from "./routes/foundations";
import components from "./routes/components";
import e2e from "./routes/e2e";

const CustomLink = React.forwardRef<any, LinkComponentProps>((props, ref) => {
  const { href, children, ...restProps } = props;
  return href[0] === "/" ? (
    <ReactRouterLink to={href} ref={ref} {...restProps}>
      {children}
    </ReactRouterLink>
  ) : (
    <a href={href} ref={ref} {...restProps}>
      {children}
    </a>
  );
});

export const App = () => (
  <StrictMode>
    <OriginThemeProvider linkComponent={CustomLink}>
      <Switch>
        {map({ ...e2e }, (routeProps, path) => (
          <Route key={path} {...routeProps} path={path} />
        ))}
        <Navigation>
          <Switch>
            {map(
              { ...home, ...guides.routes, ...foundations, ...components },
              (routeProps, path) => (
                <Route key={path} {...routeProps} path={path} />
              )
            )}
            <Redirect path="/components" exact to="/" />
          </Switch>
        </Navigation>
      </Switch>
    </OriginThemeProvider>
  </StrictMode>
);
