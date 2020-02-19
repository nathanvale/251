import React, {StrictMode} from "react";
import * as ReactDOM from "react-dom";
import transition from "styled-transition-group";
import {HashRouter as Router, Route} from "react-router-dom";
import {DebugProvider} from "@origin-digital/ods-devtools";
import {OriginThemeProvider, Box} from "@origin-digital/ods-core";
import {Documentation} from "./routes/Documentation/Documentation";
import {Home} from "./routes/Home/Home";

const routes = [
  {path: "/", name: "Home", exact: true, Component: Home},
  {
    path: "/(guides|components|foundations)",
    name: "Documentation",
    exact: false,
    Component: Documentation,
  },
];

const transitionSpeed = "0.15s";

const CSSTransition = transition.div`
  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity ${transitionSpeed};
    transition-delay: transitionSpeed,
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
  opacity: 0,
  transition: opacity ${transitionSpeed},
  }
`;

ReactDOM.render(
  <OriginThemeProvider>
    <DebugProvider>
      <Router>
        <Box backgroundColor="white">
          {routes.map(({path, exact, Component}) => (
            <Route key={path} exact={exact} path={path}>
              {({match}) => (
                <CSSTransition in={match != null} timeout={350} unmountOnExit>
                  <StrictMode>
                    <Box
                      position="absolute"
                      backgroundColor="white"
                      style={{top: 0, bottom: 0, left: 0, right: 0}}
                    >
                      <Component />
                    </Box>
                  </StrictMode>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Box>
      </Router>
    </DebugProvider>
  </OriginThemeProvider>,
  document.getElementById("root"),
);
