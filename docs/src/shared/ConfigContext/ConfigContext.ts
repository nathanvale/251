import {createContext, useContext} from "react";
import {AppConfig} from "../../types";

let baseUrl = window.location.origin + window.location.pathname;

if (baseUrl) {
  if (window.location.hostname === "localhost") {
    baseUrl = "localhost:9999";
  }
  const trimmedBaseUrl = baseUrl.replace(/\/$/, "");
  baseUrl = `http://${trimmedBaseUrl}`;
}

const playroomUrl =
  window.location.hostname === "localhost"
    ? "localhost:9999"
    : `${baseUrl}/playroom`;

const defaultConfig: AppConfig = {
  playroomUrl,
  sourceUrlPrefix:
    "https://bitbucket.origin.com.au/projects/OD/repos/origin-ui/browse",
  zeplinUrl: "https://app.zeplin.io/project/5a04e5b2e5f0b90b17771a32",
};

const context = createContext(defaultConfig);

export const ConfigConsumer = context.Consumer;
export const ConfigProvider = context.Provider;

export const useConfig = () => useContext(context);
