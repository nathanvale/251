import { RouteProps } from "react-router";
import { ReactNode, ComponentType } from "react";

export interface DocsPage extends RouteProps {
  title: string;
}

export interface AppConfig {
  playroomUrl: string;
  sourceUrlPrefix: string;
  zeplinUrl: string;
}
