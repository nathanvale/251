import {createContext, useContext} from "react";
import {AppConfig} from "../../types";

let baseUrl = "docs.origindigital-dac.com.au/designsystem/playroom";

if (baseUrl) {
  if (window.location.hostname === "localhost") {
    baseUrl = "localhost:9999";
  }
  const trimmedBaseUrl = baseUrl.replace(/\/$/, "");
  baseUrl = `http://${trimmedBaseUrl}`;
}

const defaultConfig: AppConfig = {
  playroomUrl: baseUrl,
  sourceUrlPrefix: "",
};

const context = createContext(defaultConfig);

export const ConfigConsumer = context.Consumer;
export const ConfigProvider = context.Provider;

export const useConfig = () => useContext(context);
