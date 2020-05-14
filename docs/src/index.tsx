import React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";
import { ConfigProvider } from "./App/ConfigContext";
import { App } from "./App/App";
import ScrollToTop from "./App/ScrollToTop/ScrollToTop";

const playroomUrl =
  window.location.hostname === "localhost"
    ? "localhost:9999"
    : `${window.location.origin + window.location.pathname}playroom`;
const sourceUrlPrefix =
  "https://bitbucket.origin.com.au/projects/OD/repos/origin-ui/browse";
const zeplinUrl = "https://app.zeplin.io/project/5a04e5b2e5f0b90b17771a32";

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <ConfigProvider value={{ playroomUrl, sourceUrlPrefix, zeplinUrl }}>
      <ScrollMemory />
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById("root")
);
